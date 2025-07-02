// Online Java Compiler
// Use this editor to write, compile and run your Java code online
import java.util.*;
class Main {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int[] arr=new int[n];
        for(int i=0;i<n;i++){
            arr[i]=sc.nextInt();
        }
        System.out.println(search(arr,2));
        System.out.println(avg(arr));
    }
    public static boolean search(int[] arr,int e){
        int n=arr.length;
        for(int i=0;i<n;i++){
            if(arr[i]==e){
                return true;
            }
        }
        return false;
    }
    public static int avg(int[] arr){
        int sum=0;
        int n=arr.length;
        for(int i=0;i<n;i++){
            sum+=arr[i];
        }
        return sum/n;
    }
}