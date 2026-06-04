public class nestedLoop {
    public static void main(String[] args){
        //    for(int i = 5; i>=1; i--){
        //         for(int j=1; j<=i; j++){
        //             System.out.print("* ");
        //         }
        //         System.out.println();
        //     }


    //     for(int i=1; i<=5; i++){
    //         for(int j=1; j <=i; j++){
    //             System.out.print("* ");
    //         }
    //         System.out.println();
    //     }
    //     for(int i = 5; i>=1; i--){
    //             for(int j=1; j<=i; j++){
    //                 System.out.print("* ");
    //             }
    //             System.out.println();
    //     }
    // int n = 4;
    // spaces
    // for(int i=0; i < n ; i++){
    //     for(int j=1; j<n-i; j++){
    //         System.out.print(" ");
    //     }
    //     // stars
    //     for(int j = 1; j<=i; j++){
    //         System.out.print("* ");
    //     }
    //     System.out.println();
    // }

    // for(int i = n; i>0; i--){
    //     for(int j = 1; j< n-i; j++){
    //         System.out.print(" ");
    //     }
    //     for(int j = i+1; j>0; j--){  
    //         System.out.print("* ");
    //     }
    //     System.out.println();
    // }
    // }

// int n = 5;
    // Upper pyramid --> odd stars
    // for(int i=1; i<=n; i++){
        // spaces
//         for(int j=1; j<= n-i; j++){
//             System.out.print(" ");
//         }
//         // stars
//         for(int j=1; j<=2*i-1; j++){  // Odd starts from 1, 3, 5, 7, 9
//             System.out.print("*");
//         }
//         System.out.println();
// }
    // Lower pyramid --> odd starts --> change 2*i-1 to [(2*n-1)+1]--> stars loop


    // Diamond pattern 


    // triangle pattern
    // int ch = 65;
    // for(int i=1; i<=5; i++){

    // }
       
        // code here
        // ABCD
        // ABC
        // int n = 5;
        //  for(int i = 1; i <= n; i++){
        //     for(int j=0; j<=n-i; j++){
        //         System.out.print((char)('A'+j)+" ");
        //     }
        //     System.out.println();
        // }


        // int n = 4;
        // // *
        // // **
        // // ***
        // for(int i =1; i<=n; i++){
        //     for(int j = 1; j<= n-i; j++){
        //         System.out.print("  ");
        //     }
        //     for(int j = 1; j <=i; j++){
        //         System.out.print("* ");
        //     }
        //     System.out.println();
        // }
// Hollow square
// Hollow Pyramid
// Reverse Hollow triangle
// Staricase Pattern

// int n = 4;
//    for(int i = n; i>=1; i--){
//         for(int j = 1; j<= n-i; j++){
//             System.out.print(" ");
//         }
//         for(int j = i; j>0; j--){  
//             System.out.print("* ");
//         }
//         System.out.println();
//     }

        // hollow square :
    // int n = 5;
    // for(int i=0; i<n; i++){
    //     // System.out.print(" ");
    //     for(int j=0; j<n;j++){
    //         if(i == 0 || i == n-1 || j==0 || j==n-1){
    //             System.out.print("* ");
    //         }else{
    //             System.out.print("  ");
    //         }
    //     }
    //     System.out.println();
    // }

    int n =5;
    for(int i=1;i<=n;i++){
        for(int j=1; j<= n-i; j++){
            System.out.print(" ");
        }
        // stars
        for(int j=1; j<=i;j++){
            if(j==1 || j == i || i == n){
                System.out.print("* ");
            }else{
                System.out.print("  ");
            }
        }
        System.out.println();
    }

    // hw : staircase --> 2 increment --> i % 2 ==> stars+= 2;
}
}



