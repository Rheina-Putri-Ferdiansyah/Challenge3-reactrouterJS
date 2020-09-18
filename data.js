import React from 'react'

class Data extends React.Component {
    render () {
        return(
            
            <div  class="shadow-lg p-3 mb-5 bg-dark rounded">
             
                
                <p class="text-white bg-dark"><h2>------- KASUS COVID '19   --------------------------- PETA SEBARAN COVID JAWA TIMUR -------</h2><hr/></p>
                <img src="sebar.png" class="rounded float-right"></img>
               
            <div  class="card col-sm-4 auto m-6">
                <img src="berita1.jpeg" width="100%"></img>
            <div class="card-body" >
                <h5 class="card-title"><strong>Belasan Warga Satu Kampung di Kota Malang Positif Covid-19</strong></h5>
                <p class="card-text">Tambahan kasus terkonfirmasi positif Corona Covid-19 dari klaster kampung ini merupakan yang tertinggi selama pandemi di Kota Malang.</p>
                <a href="https://www.liputan6.com/regional/read/4287106/belasan-warga-satu-kampung-di-kota-malang-positif-covid-19" class="btn btn-primary">Baca Selengkapnya</a>
            </div>

            <div class="card-body" >
            <img src="berita2.jpg" width="100%"></img>
                <h5 class="card-title"><strong>Rekor Tertinggi Penambahan Pasien Positif Covid-19 di Malang dalam Sehari</strong></h5>
                <p class="card-text">Satgas Covid-19 Kota Malang menyebut jumlah pasien terkonfirmasi positif virus corona baru yang terus naik karena pelacakan berjalan masif</p>
                <a href="https://www.liputan6.com/regional/read/4314299/rekor-tertinggi-penambahan-pasien-positif-covid-19-di-malang-dalam-sehari" class="btn btn-primary">Baca Selengkapnya</a>
            </div>

            <div class="card-body" >
            <img src="berita3.jpg" width="100%"></img>
                <h5 class="card-title"><strong>Drama Kaburnya Pasien Positif Covid-19 dari RSUD Saiful Anwar Malang</strong></h5>
                <p class="card-text">Manajemen RSUD Saiful Anwar Malang memberikan penjelasan soal kaburnya satu orang pasien positif Covid-19 dari sumah sakit tersebut.</p>
                <a href="https://www.liputan6.com/regional/read/4305991/drama-kaburnya-pasien-positif-covid-19-dari-rsud-saiful-anwar-malang" class="btn btn-primary">Baca Selengkapnya</a>
            </div>
                </div>

                
            </div>
         
        )
    }
}

export default Data;