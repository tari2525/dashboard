document.addEventListener("DOMContentLoaded", function() {
    // Simulasi data untuk total views dan comments
    const totalViews = 620; // Ganti dengan data dinamis jika diperlukan
    const totalComments = 567; // Ganti dengan data dinamis jika diperlukan

    // Update elemen HTML dengan data
    document.getElementById('totalViews').textContent = totalViews;
    document.getElementById('totalComments').textContent = totalComments;

    // Data untuk diagram batang (pendapatan bulanan)
    const barData = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [{
            label: 'Pendapatan Bulanan',
            data: [1200, 1900, 3000, 5000, 2400, 3800],
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Config untuk diagram batang
    const barConfig = {
        type: 'bar',
        data: barData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render diagram batang
    const barChart = new Chart(
        document.getElementById('barChart'),
        barConfig
    );

    // Data untuk diagram garis (kunjungan bulanan)
    const lineData = {
        labels: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni'],
        datasets: [{
            label: 'Kunjungan Bulanan',
            data: [300, 500, 400, 600, 700, 800],
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            tension: 0.1
        }]
    };

    // Config untuk diagram garis
    const lineConfig = {
        type: 'line',
        data: lineData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Render diagram garis
    const lineChart = new Chart(
        document.getElementById('lineChart'),
        lineConfig
    );
});
