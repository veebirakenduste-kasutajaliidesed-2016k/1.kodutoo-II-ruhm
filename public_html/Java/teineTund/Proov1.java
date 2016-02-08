import java.util.*;
public class Proov1{
	public static void main(String[] arg){
		Arvud1 massid1=new Arvud1(new double[]{35, 45, 42});
		Arvud1 massid2=new Arvud1(new double[]{55, 45, 48});
		Arvud1 massid3=massid2.lisa(63);
		Arvud1 massid4=massid1.lisa(massid2);
		System.out.println(massid4.vahemikeArvSagedusJaotuses());
		System.out.println(Arrays.toString(massid4.sagedusJaotus(30, 10, 3)));
		System.out.println(massid4.dispersioon() + " "+massid4.standardHalve()+" "+massid4.keskmine());
		System.out.println(massid4);
		System.out.println(massid3);
		System.out.println(massid1.summa());
		System.out.println(massid2.summa());
		System.out.println(massid1.keskmine());
		System.out.println(massid2.keskmine());
		//Arvud1 katse1=new Arvud1(null);
		//Arvud1 katse2=new Arvud1(new double[]{});
	}
}
