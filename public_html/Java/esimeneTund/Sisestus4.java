import java.io.*;
import java.util.*;
import java.net.*;
public class Sisestus4{
	
	static List<Integer> loe(Reader lugeja){
		List<Integer> tulemus=new ArrayList<Integer>();
		try{
			BufferedReader br=new BufferedReader(lugeja);
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
	public static List<Integer> loeFailist(String failinimi) throws Exception{
		return loe(new FileReader(failinimi));
	}

	public static List<Integer> loeVeebist(String url) throws Exception{
		return loe(new InputStreamReader(
			     new URL(url).openConnection().getInputStream()));
	}

	public static Map<Integer, Integer> grupeeri(List<Integer> m){
		Map<Integer, Integer> tulemus=new HashMap<Integer, Integer>();
		for(int arv: m){
			if(tulemus.containsKey(arv)){
				int kogus=tulemus.get(arv);
				tulemus.put(arv, kogus+1);
			} else {
				tulemus.put(arv, 1);
			}
		}
		return tulemus;
	}
	
	public static void main(String[] arg) throws Exception{
//		List<Integer> arvud=loeFailist("pikkused.txt");
		List<Integer> arvud=loeVeebist("http://greeny.cs.tlu.ee/~markuss/Java/esimeneTund/pikkused.txt");
		Map<Integer, Integer> kogused=grupeeri(arvud);
		System.out.println(kogused);
		for(int pikkus: kogused.keySet()){
			if(kogused.get(pikkus)>1){System.out.println(pikkus+": "+kogused.get(pikkus));}
		}
		
	}
}