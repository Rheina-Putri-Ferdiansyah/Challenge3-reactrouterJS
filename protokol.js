import React from 'react'

class Protokol extends React.Component {
    render() {
        return(
            
            <div class="p-3 mb-2 bg-dark text-white">
                <center>
                <p><img src="protokol.jpg" width="70%"></img></p>
                </center>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                
                <h5><p><strong>Membawa Handsanitizier</strong></p>
                Seperti yang sudah diketahui bersama, berbagai bakteri sampai virus seperti virus corona dapat 
                menyebarluas dengan mudah karena terjadinya kontak fisik. Kontak fisik yang paling sederhana adalah
                berjabat tangan.Oleh karena itu, kebersihan tangan mesti benar-benar dijaga. Bahkan mungkin kedepannya
                nanti, kita tidak akan bersalaman lagi untuk menghindari hal-hal tersebut. Kemudian, mencuci tangan 
                menggunakan sabun atau minimal membersihkan tangan dengan hand-sanitizer jadi standar untuk memastikan 
                tangan kamu bersih.</h5>

            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Menggunakan Masker</strong></p>
                Sehat atau sakit, menggunakan masker akan jadi kebiasaan baru di periode new normal nanti. 
                Hal ini terkait dengan anjuran berbagai pihak yang menyatakan penggunaan masker bisa mencegah paparan 
                virus berbahaya seperti Covid-19 ini.Apalagi jika kamu ingin keluar dari rumah untuk melakukan aktivitas,
                 masker jadi hal yang penting untuk kamu miliki dan kamu gunakan.</h5>
            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Menjaga Jarak</strong></p>
                Physical distancing pastinya akan jadi hal yang terbawa-bawa sampai ke periode new normal nanti. 
                Kamu tentunya akan mengatur jarak keberadaan kamu dengan orang lain. Hal ini mengacu kepada anjuran 
                berbagai pihak yang menyatakan ada jarak aman untuk bersosialiasi agar tidak terpapar virus berbahaya 
                jika orang-orang tersebut adalah carrier atau pembawa virus.</h5>
            </div>

            <div className="card col-sm-10 mx-auto m-5"  class="alert alert-danger" role="alert">
                <h5><p><strong>Isolasi Mandiri</strong></p>
                Jika kamu mengetahui tubuh mu punya gejala-gejala mirip dengan infeksi Covid-19 atau memang sedang 
                tidak sehat, kamu bisa mengkarantina dirimu sendiri di dalam rumah. Karantina atau isolasi mandiri 
                ini tentu akan membantu banyak pihak.</h5>
            </div>


            </div>
        )
    }
}

export default Protokol;