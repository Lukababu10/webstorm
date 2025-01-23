<script>
    "use strict";

    // Не влияет на числа
    let x = 1;
    alert( +x ); // 1

    let y = -2;
    alert( +y ); // -2

    // Преобразует не числа в числа
    alert( +true ); // 1
    alert( +"" );   // 0
</script>