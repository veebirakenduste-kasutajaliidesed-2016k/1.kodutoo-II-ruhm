public class Tervitus{
	public static void main(String[] argumendid){
		System.out.println("Tere!");
		
		int a = 4;
		int b = 6;
		System.out.println(a*b);
		
		if(argumendid.length == 2){
			a = Integer.parseInt(argumendid[0]);
			b = Integer.parseInt(argumendid[1]);
		}
		
		if (a > b){
			System.out.println("A on suurem.");
		}else{
			System.out.println("B on suurem.");			
		}
		
		for (int rida = 0; rida < a; rida ++){
			for (int veerg = 0; veerg < b; veerg++){
				System.out.print("*");
			}
			System.out.println();
		}
	}
}