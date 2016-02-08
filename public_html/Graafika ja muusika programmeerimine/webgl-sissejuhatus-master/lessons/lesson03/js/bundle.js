(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////Antud osa tegeleb WebGL konteksti loomisega ja meile vajaliku WebGLProgram objekti loomisega ///////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var ShaderProgramLoader = require("./../utils/shaderprogramloader");

//Varjundajate kataloog
var SHADER_PATH = "shaders/lesson03/";

//Element, kuhu renderdame
var canvas = document.getElementById("canvas");

//Loome globaalse WebGL konteksti
GL = initWebGL(canvas);

//Seadistame renderdamisresolutsiooni
GL.viewport(0, 0, canvas.width, canvas.height);
GL.viewportWidth = canvas.width;
GL.viewportHeight = canvas.height;

//Loome uue programmi spetsifitseeritud varjundajatega. Kuna laadimine on asĆ¼nkroonne, siis anname kaasa ka
//meetodi, mis kutsutakse vĆ¤lja kui varjundajad on laetud
var shaderProgramLoader = new ShaderProgramLoader();
var shaderProgram = shaderProgramLoader.getProgram(SHADER_PATH + "vertex.shader", SHADER_PATH + "fragment.shader", render);


//Ćritame luua WebGL konteksti
function initWebGL(canvas) {
    var gl = null;

    try {

        //Ćritame luua tavalist konteksti, kui see ebaĆµnnestub Ć¼ritame luua eksperimentaalset,
        //Mida kasutatakse spetsifikatsiooni arendamiseks
        gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    } catch (e) {}

    if(!gl) {
        alert("Unable to initilize WebGL. Your browser may not support it.");
        throw Error("Execution terminated. No WebGL context");
    }

    return gl;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////// LESSON03 - MAATRIKSID /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function render() {

    //Mudelmaatriks, millega objektiruumist maailmaruumi saada
    var modelMatrix = mat4.create();

    //Punkt, kus objekt hetkel asub
    var objectAt = [0.0, 0.0, 0.0];
	mat4.rotateZ(modelMatrix,modelMatrix,2) 
    //Kasutades translatsiooni, saame mudelmaatriksiga objekti liigutada
    mat4.translate(modelMatrix, modelMatrix, objectAt);

    //Kaameramaatriks, millega maailmaruumist kaameraruumi saada
    var viewMatrix = mat4.create();

    //Defineerime vektorid, mille abil on vĆµimalik kaameraruumi baasvektorid arvutada
    var cameraAt = [0, 0, 5];            //Asub maailmaruu mis nendel koordinaatidel
    var lookAt = [0, 0, 0];             //Mis suunas kaamera vaatab. ParemakĆ¤e koordinaatsĆ¼steemis on -z ekraani sisse
    var up = [0, 1, 0];                  //Vektor, mis nĆ¤itab, kus on kaamera Ć¼lesse suunda nĆ¤itav vektor

    //Kalkuleerime antud koordinaatide jĆ¤rgi kaameramaatriksi
    mat4.lookAt(viewMatrix, cameraAt, lookAt, up);

    //Projektsioonimaatriks, et pĆ¼gamisruumi saada. Kasutades glMatrix teeki genereerime ka pĆ¼ramiidi, kuhu sisse objektid lĆ¤hevad.
    var projectionMatrix = mat4.create();
    mat4.perspective(projectionMatrix, 45.0, GL.viewportWidth / GL.viewportHeight, 1.0, 1000.0);




    //Tippude andmed
    var myVerticesData = [
        -0.5, -0.5,  0.5,
        0.5, -0.5,  0.5,
        0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,
		-1.0, 1.0,  1.0,
		1.0,  1.0,  1.0
		
    ];

    //Loome puhvri, kuhu tipuandmed viia. Seome ka antud puhvri kontekstiga, et temale kĆ¤ske edasi anda
    var vertexBuffer = GL.createBuffer();

    GL.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer);

    //Anname loodud puhvrile andmed
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(myVerticesData), GL.STATIC_DRAW);

    //Tippude indeksid
    var myIndicesData = [
        0,  1,  2,
        0,  2,  3,
		0,  1,  3,
		0,  3,  5
    ];

    //Loome puhvri, kuhu indeksid viia. Seome ka antud puhvri kontekstiga, et temale kĆ¤ske edasi anda
    var indexBuffer = GL.createBuffer();
    indexBuffer.numberOfIndexes = 12;
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, indexBuffer);

    //Anname loodud puhvrile andmed
    GL.bufferData(GL.ELEMENT_ARRAY_BUFFER, new Uint16Array(myIndicesData), GL.STATIC_DRAW);

    //Tippude vĆ¤rvid
    var myVerticesColor = [
        1.0,  0.0,  0.0,   // Tipp 1 punane
        0.0,  1.0,  0.0,   // Tipp 2 roheline
        0.0,  0.0,  1.0,   // Tipp 3 sinine
        1.0,  1.0,  0.0,   //Tipp 4 kollane
		0.0,  1.0,  0.0,   // Tipp 2 roheline
        0.0,  0.0,  1.0,   // Tipp 3 sinine
    ];

    //Loome puhvri ja seome kontekstiga
    var colorBuffer = GL.createBuffer();
    GL.bindBuffer(GL.ARRAY_BUFFER, colorBuffer);

    //Anname kontekstiga seotud puhvrile andmed
    GL.bufferData(GL.ARRAY_BUFFER, new Float32Array(myVerticesColor), GL.STATIC_DRAW);

    //MĆ¤Ć¤rame programmi, mida me renderdamisel kasutada tahame
    GL.useProgram(shaderProgram);

    //Saame indeksi, mis nĆ¤itab kus asub meie programmis kasutatavas tipuvarjundajas
    //olev tipuatribuut nimega a_VertexPosition
    var a_Position = GL.getAttribLocation(shaderProgram, "a_Position");

    //Saame vĆ¤rviatribuudi asukoha
    var a_Color = GL.getAttribLocation(shaderProgram, "a_Color");

    //Saame Ć¼htsete muutujate asukohad
    var u_ModelMatrix = GL.getUniformLocation(shaderProgram, "u_ModelMatrix");
    var u_ViewMatrix = GL.getUniformLocation(shaderProgram, "u_ViewMatrix");
    var u_ProjectionMatrix = GL.getUniformLocation(shaderProgram, "u_ProjectionMatrix");

    //Seekord enne renderdamist puhastame ka vĆ¤rvi- ja sĆ¼gavuspuhvrid, ning mĆ¤Ć¤rame uue puhastuvĆ¤rvuse.
    //Hetkel puhastamine midagi ei tee, sest me renderdame vaid Ć¼he korra, kuid kui me tsĆ¼kklis seda tegema
    //on nĆ¤ha ka, mida nad teevad.
    GL.clearColor(0.0, 0.0, 0.0, 1.0, 1.0, 1.0);
    GL.clear(GL.COLOR_BUFFER_BIT | GL.DEPTH_BUFFER_BIT);

    //Seome tipupuhvri ja mĆ¤Ć¤rame, kus antud tipuatribuut asub antud massiivis.
    GL.bindBuffer(GL.ARRAY_BUFFER, vertexBuffer);
    GL.vertexAttribPointer(a_Position, 3, GL.FLOAT, false, 0, 0);

    //Seome vĆ¤rvipuhvri ja mĆ¤Ć¤rame, kus antud atribuut asub antud massiivis.
    GL.bindBuffer(GL.ARRAY_BUFFER, colorBuffer);
    GL.vertexAttribPointer(a_Color, 3, GL.FLOAT, false, 0, 0);

    //Aktiveerime atribuudid
    GL.enableVertexAttribArray(a_Position);
    GL.enableVertexAttribArray(a_Color);

    //Saadame meie maatriksid ka varjundajasse
    GL.uniformMatrix4fv(u_ModelMatrix, false, modelMatrix);
    GL.uniformMatrix4fv(u_ViewMatrix, false, viewMatrix);
    GL.uniformMatrix4fv(u_ProjectionMatrix, false, projectionMatrix);

    //Renderdame kolmnurgad indeksite jĆ¤rgi
    GL.bindBuffer(GL.ELEMENT_ARRAY_BUFFER, indexBuffer);
    GL.drawElements(GL.LINE_LOOP, indexBuffer.numberOfIndexes, GL.UNSIGNED_SHORT, 0);


}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////   LĆ•PP  /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


},{"./../utils/shaderprogramloader":2}],2:[function(require,module,exports){
/**
 * Hoiab endas WebGLProgram objekti ja WebGLShader tipuvarjundajat ja pikslivarjundajat
 *
 * @param {String} vertexShaderPath
 * @param {String} fragmentShaderPath
 * @param {function} onLinked Meetod, mis kutsutakse vĆ¤lja, kui varjundajad on laetud
 * @class
 */
var ProgramObject = function(vertexShaderPath, fragmentShaderPath, onLinked) {
    this.program = GL.createProgram();

    this.onLinked = onLinked;

    this.vertexShader = {
        "shader": GL.createShader(GL.VERTEX_SHADER),
        "path": vertexShaderPath,
        "src": "",
        "completed": false
    };

    this.fragmentShader = {
        "shader": GL.createShader(GL.FRAGMENT_SHADER),
        "path": fragmentShaderPath,
        "src": "",
        "completed": false
    };
};

ProgramObject.prototype = {

    constructor: ProgramObject,

    /**
     * Callback meetod, mis kompileerib ja sĆ¤testab varjundajad, kui mĆµlemad on asĆ¼nkroonselt laetud
     *
     * @param {String} src LĆ¤htekood, mis AJAX'i abil laeti
     * @param {String} path Tee, mille abil tuvastada, kumma varjundaja lĆ¤htekood on laetud
     */
    oncomplete: function(src, path) {
        if(path === this.vertexShader.path) {
            this.vertexShader.completed = true;
            this.vertexShader.src = src;
        }
        else if(path === this.fragmentShader.path) {
            this.fragmentShader.completed = true;
            this.fragmentShader.src = src;
        }

        if(this.vertexShader.completed && this.fragmentShader.completed) {
            this.compileShader(this.vertexShader.shader, this.vertexShader.src);
            this.compileShader(this.fragmentShader.shader, this.fragmentShader.src);

            GL.attachShader(this.program, this.vertexShader.shader);
            GL.attachShader(this.program, this.fragmentShader.shader);

            GL.linkProgram(this.program);

            if(!GL.getProgramParameter(this.program, GL.LINK_STATUS)) {
                throw Error("Error linking shader program: \"" + GL.getProgramInfoLog(this.program) + "\"");
            }

            if(typeof this.onLinked != "undefined")
                this.onLinked();
        }
    },

    /**
     * Ćritab kompileerida varjundaja
     *
     * @param {WebGLShader} shader Varjundaja mida kompileerida
     * @param {String} source LĆ¤htekood, mida kompileerida
     */
    compileShader: function(shader, source) {
        GL.shaderSource(shader, source);
        GL.compileShader(shader);

        if (!GL.getShaderParameter(shader, GL.COMPILE_STATUS)) {
            throw Error("Shader compilation failed. Error: \"" + GL.getShaderInfoLog(shader) + "\"");
        }
    }
};

/**
 * Antud klassi abil on vĆµimalik programmi laadida ja asĆ¼nkroonselt tagapildil spetsifitseeritud varjundajad
 * tagastatud programmiga siduda
 *
 * @class ShaderProgramLoader
 */
var ShaderProgramLoader = function() {
    this.container = [];
    this.counter = -1;
};

ShaderProgramLoader.prototype = {
    constructor: ShaderProgramLoader,

    /**
     * Tagastab programm objekti. AsĆ¼nkroonselt tagaplaanil laetakse ja kompileeritakse varjundajad. Enne kui
     * programmi kasutada tuleb kontrollida, et varjundajad on kompileeritud ja programmiga seotud. VĆµimalik on
     * parameetriks anda ka Callback funktsioon, mis teada annab, kui varjundajad on seotud.
     *
     * @param {String} vertexShaderPath Tee, tipuvarjundaja juurde
     * @param {String} fragmentShaderPath Tee, pikslivarjundaja juurde
     * @param {function} linkedCallback Funktsioon, mis kutsutakse vĆ¤lja, kui varjundajad on kompileeritud ja seotud programmiga
     * @returns {exports.defaultOptions.program|*|WebGLProgram|ProgramObject.program}
     */
    getProgram: function(vertexShaderPath, fragmentShaderPath, linkedCallback) {
        this.counter++;
        this.container[this.counter] = new ProgramObject(vertexShaderPath, fragmentShaderPath, linkedCallback);
        var program = this.container[this.counter];

        this.loadAsyncShaderSource(vertexShaderPath, program.oncomplete.bind(program));
        this.loadAsyncShaderSource(fragmentShaderPath, program.oncomplete.bind(program));

        return program.program;
    },

    /**
     * Laeb asĆ¼nkroonselt lĆ¤htekoodi
     *
     * @param {String} shaderPath Tee, kus asub varjundaja
     * @param {function} callback Funktsioon, mis kĆ¤ivitatakse, kui lĆ¤htekood on kĆ¤tte saadud. Saadetakse vastus ja tee.
     */
    loadAsyncShaderSource: function(shaderPath, callback) {
        $.ajax({
            async: true,
            dataType: "text",
            url: shaderPath,
            success: function(result) {
                callback(result, shaderPath);
            }
        });
    }

};

module.exports = ProgramObject;
module.exports = ShaderProgramLoader;
},{}]},{},[1]);