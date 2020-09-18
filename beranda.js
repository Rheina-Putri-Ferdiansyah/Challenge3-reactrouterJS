import React from 'react'

class Beranda extends React.Component {
    
    render(){
       
        return(
            <center>
            <div class="shadow-lg p-3 mb-5 bg-dark rounded" >
                <center><h4 text-align="center"></h4></center>
                <h1 class="text-white bg-dark"> APA ITU COVID ???</h1> <br/>
                <img src="covid.jpg" width="70%"></img> <br/><br/>
                <div class="alert alert-info" role="alert" >
                <h5 > Coronavirus merupakan keluarga besar virus yang menyebabkan penyakit pada manusia dan hewan. 
                     Pada manusia biasanya menyebabkan penyakit  infeksi saluran pernapasan, mulai flu biasa hingga  
                     penyakit yang serius seperti Middle East Respiratory Syndrome (MERS) dan Sindrom Pernafasan Akut Berat/Severe Acute  \
                     Respiratory Syndrome (SARS). Coronavirus jenis baru yang ditemukan pada manusia sejak kejadian luar biasa muncul di Wuhan Cina, 
                    pada Desember 2019, kemudian diberi nama Severe Acute Respiratory Syndrome 
                    Coronavirus 2 (SARS-COV2), dan menyebabkan penyakit Coronavirus Disease-2019 
                    (COVID-19). Seseorang dapat terinfeksi dari penderita COVID-19. Penyakit ini dapat menyebar melalui tetesan kecil (droplet) 
                    dari hidung atau mulut pada saat batuk atau bersin. <br/ >Droplet tersebut kemudian jatuh pada benda di sekitarnya. Kemudian jika ada
                    orang lain menyentuh benda yang sudah terkontaminasi dengan droplet tersebut, lalu orang itu menyentuh mata, hidung atau mulut 
                    (segitiga wajah), maka orang itu dapat terinfeksi COVID19. Atau bisa juga seseorang terinfeksi COVID-19 ketika tanpa sengaja 
                    hirup droplet dari penderita. Inilah sebabnya mengapa kita penting untuk menjaga jarak hingga kurang lebih satu meter
                     dari orang yang sakit. Sampai saat ini, para ahli masih terus melakukan penyelidikan untuk menentukan sumber virus, 
                     jenis paparan, dan cara penularannya. Tetap pantau sumber informasi yang akurat dan resmi mengenai perkembangan 
                     penyakit ini.</h5>
            </div></div>
            
            
            </center>
        )
    }
}

export default Beranda;