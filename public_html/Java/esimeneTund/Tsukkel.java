import java.io.*;
public class Tsukkel{
	public static void main (String[] arg) throws Exception{
		BufferedReader klaver = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Palun sisesta arve, mida soovid liita (0 to end): ");
		int a = Integer.parseInt(klaver.readLine());
		int sum = 0;
		while (a != 0){
			//sum = sum + a;
			sum += a;
			//System.out.println(sum);
			a = Integer.parseInt(klaver.readLine());
		}
		
		//int b = Integer.parseInt(klaver.readLine());
		System.out.println(sum);
	}
}