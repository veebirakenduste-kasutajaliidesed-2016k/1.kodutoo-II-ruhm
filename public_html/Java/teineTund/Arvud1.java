import java.util.*;
public class Arvud1{
	double[] arvud;
	public Arvud1(double[] uuedArvud){
		if(uuedArvud==null){throw new RuntimeException("Tühiviit algandmeteks");}
		if(uuedArvud.length==0){throw new RuntimeException("Vaja vähemalt üht elementi");}
		arvud=uuedArvud;
	}

	public Arvud1 lisa (double arv){
		double[] uusMassiiv = new double[arvud.length+1];
		for (int i=0; i<arvud.length; i++){
			uusMassiiv[i] = arvud[i];
		}
		uusMassiiv[arvud.length]=arv;
		return new Arvud1(uusMassiiv);
	}

	public Arvud1 lisa(Arvud1 lisatav){
		double[] uusMassiiv = new double[arvud.length+lisatav.arvud.length];
		for (int i=0; i<arvud.length; i++){
			uusMassiiv[i] = arvud[i];
		}
		for (int i=0; i<lisatav.arvud.length; i++){
				uusMassiiv[arvud.length + i] = lisatav.arvud[i];
			}
			return new Arvud1(uusMassiiv);
	}

	public int[] sagedusJaotus(double vahimVaartus, double vahemikuPikkus, int vahemikeArv){
		int[] vastus = new int[vahemikeArv];
		for(int i=0; i<arvud.length; i++){
			int vahemikunr = (int)((arvud[i]-vahimVaartus)/vahemikuPikkus);
			vastus[vahemikunr]++;
		}
		return vastus;
	}

	public int vahemikeArvSagedusJaotuses(){
		return (int)(Math.log(arvud.length)/Math.log(2) + 1);
	}

	@Override
	public String toString(){
		return Arrays.toString(arvud);
	}

	public double summa(){
		double abi=0;
		for(int i=0; i<arvud.length; i++){
			abi=abi+arvud[i];
		}
		return abi;
	} //Lisage funktsioon keskmise arvutamiseks ja katsetage
	public double keskmine(){
		return summa()/arvud.length;
	}

	public double dispersioon(){
		double k = keskmine();
		double vaheruutudesumma=0;
		for (int i=0; i<arvud.length; i++){
			double vahe=arvud[i]-k;
			vaheruutudesumma+=vahe*vahe;
		}
		return vaheruutudesumma/(arvud.length-1);
	}
	public double standardHalve(){
		return Math.sqrt(dispersioon());
	}
}
