import java.io.*;
import java.util.*;
import java.net.*;
public class Sisestus3{
	public static List<Integer> loeFailist(String failinimi){
		List<Integer> tulemus=new ArrayList<Integer>();
		try{
			BufferedReader br=new BufferedReader(new FileReader(failinimi));
			String rida=br.readLine();
			while(rida!=null){
				tulemus.add(Integer.parseInt(rida));
				rida=br.readLine();
			}
			br.close();
		} catch(Exception ex){
			System.out.println(ex);
		}
		return tulemus;
	}

	public static List<Integer> loeVeebist(String url){
		List<Integer> tulemus=new ArrayList<Integer>();
		try{
			BufferedReader br=new BufferedReader(new InputStreamReader(
			     new URL(url).openConnection().getInputStream()));
			String rida=br.readLine();
			while(rida!=null){
				tulemus.add(Integer.parseInt(rida));
				rida=br.readLine();
			}
			br.close();
		} catch(Exception ex){
			System.out.println(ex);
		}
		return tulemus;
	}

	public static void main(String[] arg){
//		List<Integer> arvud=loeFailist("pikkused.txt");
		List<Integer> arvud=loeVeebist(
		    "http://greeny.cs.tlu.ee/~markuss/Java/esimeneTund/pikkused.txt");
		System.out.println("Suurim: "+Collections.max(arvud));
		//Teatage, mitu pikkust on
		System.out.println("Kokku: "+arvud.size());
		Set<Integer> erinevad=new HashSet<Integer>(arvud);
		System.out.println("Erinevad pikkused: "+erinevad+", kokku "+erinevad.size());
	}
}