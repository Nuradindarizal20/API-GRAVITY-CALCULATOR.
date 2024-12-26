// Fungsi untuk menghitung API Gravity
function calculateAPIGavity(sg) {
    if (sg <= 0) {
      return "Specific Gravity must be greater than 0.";
    }
    const apiGravity = (141.5 / sg) - 131.5; // Rumus API Gravity
    return apiGravity.toFixed(2); // Hasil dengan 2 desimal
  }
  
  // Event listener untuk tombol hitung
  document.getElementById('calculateBtn').addEventListener('click', function () {
    // Ambil nilai dari input pengguna
    const sgValue = parseFloat(document.getElementById('sg').value);
  
    // Validasi input
    if (isNaN(sgValue) || sgValue <= 0) {
      document.getElementById('result').textContent =
        "Please enter a valid Specific Gravity (SG) greater than 0.";
      document.getElementById('result').style.color = "red"; // Warna pesan error
    } else {
      // Hitung API Gravity
      const apiResult = calculateAPIGavity(sgValue);
  
      // Tampilkan hasil
      document.getElementById('result').textContent = `API Gravity: ${apiResult}`;
      document.getElementById('result').style.color = "green"; // Warna hasil sukses
    }
  });
  