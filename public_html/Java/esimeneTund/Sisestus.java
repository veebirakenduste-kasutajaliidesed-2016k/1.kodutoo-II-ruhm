import java.io.*;
public class Sisestus{
	public static void main (String[] arg) throws Exception{
		BufferedReader klaver = new BufferedReader(new InputStreamReader(System.in));
		System.out.println("Palun sisesta kaks arvu: ");
		int a = Integer.parseInt(klaver.readLine());
		int b = Integer.parseInt(klaver.readLine());
		System.out.println(a + b);
	}
}