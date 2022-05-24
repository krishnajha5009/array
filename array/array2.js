<script>
    
    let numRay = [ 0, 4, 3, 2, 7, 8, 2, 3, 1 ];
    let arr_size = numRay.length;
    
    
    
    for (let i = 0; i < arr_size; i++) {
        numRay[numRay[i] % arr_size]
            = numRay[numRay[i] % arr_size] + arr_size;
    }
    document.write("The repeating elements are : " + "</br>");
    for (let i = 0; i < arr_size; i++) {
        if (numRay[i] >= arr_size * 2) {
            document.write(i + " " + "</br>");
        }
    }
 

</script>