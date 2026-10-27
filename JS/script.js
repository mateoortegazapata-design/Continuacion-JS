function simularVentasSemanales(nombreSemana, ventaDiariaBase, metaSemana) {
    console.log(`\n=== REPORTE DE VENTAS: ${nombreSemana} ===`);
    
    let totalVentas = 0; 

    // 1. Ciclo FOR: Recorre 7 días de ventas acumuladas
    for (let dia = 1; dia <= 7; dia++) {
        let ventaDelDia = dia * ventaDiariaBase; 
        totalVentas += ventaDelDia;
        console.log(`Día ${dia}: Venta = $${ventaDelDia.toLocaleString()} | Acumulado = $${totalVentas.toLocaleString()}`);
    }

    console.log(`Total acumulado en la semana: $${totalVentas.toLocaleString()}`);

    // 2. Condicional IF / ELSE IF / ELSE (3 Niveles de decisión)
    const ochentaPorCientoMeta = metaSemana * 0.8;

    if (totalVentas >= metaSemana) {
        console.log(`ESTADO: Meta cumplida ($${totalVentas.toLocaleString()} / $${metaSemana.toLocaleString()})`);
    } else if (totalVentas >= ochentaPorCientoMeta) {
        console.log(`ESTADO: Casi se logra ($${totalVentas.toLocaleString()} acumulados. Falta poco)`);
    } else {
        let cuantoFalta = metaSemana - totalVentas;
        console.log(`ESTADO: Falta bastante (Faltaron $${cuantoFalta.toLocaleString()} para la meta)`);
    }

    // 3. Ciclo WHILE con contador (Simulación de ventas extra hasta alcanzar bonificación)
    const metaExtra = metaSemana + 500000;
    let intentosExtra = 0;

    while (totalVentas < metaExtra) {
        totalVentas += 100000; 
        intentosExtra++;      
    }

    console.log(`Ventas extra requeridas para superar bonificación ($${metaExtra.toLocaleString()}): ${intentosExtra} ventas.`);
}


// CASO 1: Semana de Alta Demanda (Supera la meta de $1.000.000 COP)
simularVentasSemanales("Semana de Lanzamiento", 50000, 1000000);

// CASO 2: Semana Normal / Baja (No alcanza la meta de $2.500.000 COP)
simularVentasSemanales("Semana Regular", 30000, 2500000);