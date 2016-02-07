import java.io.*;
import java.util.*;
public class Sisestus2{
	public static int leiaSumma(List<Integer> m){
		int summa = 0;
		for (int arv: m){
			summa += arv;			
		}
		return summa;
	}
		
	public static void main (String[] arg) throws Exception{
		BufferedReader klaver = new BufferedReader(new InputStreamReader(System.in));
		List<Integer> arvud = new ArrayList<Integer>();
		System.out.println("Palun arvud, lõpetuseks 0: ");
		int a = Integer.parseInt(klaver.readLine());
		while (a != 0){
			arvud.add(a);
			a = Integer.parseInt(klaver.readLine());
		}
		System.out.println(arvud+ ", kokku " +leiaSumma (arvud));
		System.out.println("Suurim: "+Collections.max(arvud));
		Collections.sort(arvud);
		Collections.reverse(arvud);
		System.out.println("Kasvavas järjekorras: "+arvud);
	}
}