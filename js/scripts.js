/*!
 * Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

var token = "";

window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            offset: 72,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll("#navbarResponsive .nav-link")
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // getExternalData('http://103.7.14.55/api/v1/data_list/10010/3881E330-F978-4806-8325-CF5DF175C9EC', {
    //     onSuccess: function (res) {
    //         console.log(res)
    //     },
    //     onXHRError: function (res) {
    //         console.log(res)
    //     }
    // })
});

function getExternalData(endpoint, args) {
    var xhr = new XMLHttpRequest();
    var response;

    xhr.addEventListener("load", function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            response = JSON.parse(xhr.responseText);
            // console.log('Response: ', response);

            args.onSuccess(response);
        }
    });
    xhr.addEventListener("error", function () {
        args.onXHRError(xhr);
    });

    xhr.open("GET", endpoint);
    xhr.send(null);
}

// Example GET method implementation:
async function getData(url = "") {
    // Default options are marked with *

    let resGet = "";
    const response = await fetch(url, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // cookie: '__bpjph_ct=' + token,
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Basic ' + token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    // .then(res => {
    //     return res.json();
    // })
    // .then(data => {
    //     console.log(data);
    //     return data;
    // });
    // .then(res => res.json())
    // .then(res => {
    //     const data = res.Search;
    //     data.forEach(d => resGet += d);
    // });
    return response.json(); // parses JSON response into native JavaScript objects
}

// Example DELETE method implementation:
async function deleteData(url = "") {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // cookie: '__bpjph_ct=' + token,
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Authorization': 'Basic ' + token,
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        // body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

// Example PUT method implementation:
async function editData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "include", // include, *same-origin, omit
        headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

//Login
document.getElementById("btnLogin").addEventListener("click", function (event) {
    event.preventDefault();
    login();
});

function login() {
    var email = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;
    var element = document.getElementById("loginAlert");
    // element.style.display = "none";
    postData("http://103.7.14.55/auth/signin", {
        userid: email,
        password: password,
    }).then((data) => {
        element.classList.add("alert");
        if (data.status == "success") {
            element.classList.add("alert-primary");
            element.classList.remove("alert-danger");
            document.getElementById("loginForm").reset();

            $('.nav-item[data-id="login-btn"]').addClass("d-none");
            $('.nav-item[data-id="logout-btn"]').removeClass("d-none");
            $("#loginModal").modal("toggle");
            $("#menuAPI").removeClass("d-none");
            $(".masthead").addClass("d-none");
            $(".copyright").addClass("d-none");
            $(".nav-section").removeClass("d-none");
        } else {
            element.classList.add("alert-danger");
            element.classList.remove("alert-primary");
            document.getElementById("inputPassword").value = "";
        }
        element.innerHTML = data.message;
    });
}
// document.getElementById("btnCloseLogin").addEventListener("click", function (event) {
//     document.getElementById('loginAlert').style.display = "block";
// });

//Logout
function logout() {
    postData("http://103.7.14.55/auth/logout", {}).then((data) => {
        console.log(data);
    });
}

//Data List
//data permohonan yang masuk ke lph berdasarkan status
document
    .getElementById("btnDataList")
    .addEventListener("click", function (event) {
        event.preventDefault();
        dataList();
    });

function dataList() {
    var stat = document.getElementById("statusDataList").value;
    var idLph = "3B81E330-F97B-48D6-B325-0F5DF175C9EC";
    var url = "http://103.7.14.55/api/v1/data_list/" + stat + "/" + idLph;
    getData(url)
        .then((data) => {
            return data.payload;
        })
        .then((data) => {
            generateTable(".data-list-table", data);
        });
}

//detail data permohonan
function dataMohon(regId) {
    //   var regId = "79629"; //id registrasi
    var url = "http://103.7.14.55/api/v1/reg/" + regId;
    var response = getData(url);

    return response;
}

function updateStatus() {
    var stat = "periksa"; //ajuan, biaya, periksa
    var regId = "79632"; //id registrasi //ambil dari hasil data list
    var idLph = "3B81E330-F97B-48D6-B325-0F5DF175C9EC";
    var url = "http://103.7.14.55/api/v1/data_list/updateStatus";
    postData(url, { status: stat, reg_id: regId, lph_mapped_id: idLph }).then(
        (data) => {
            console.log(data); // JSON data parsed by `data.json()` call
        }
    );
}

//daftar biaya
function biayaList() {
    // var regId = '79629'; //id registrasi
    var url = "http://103.7.14.55/api/v1/costs";
    var response = getData(url);

    console.log(response);
}

//menambah daftar biaya pemeriksaan
function biayaAdd() {
    // var idBiaya = '3000';
    var idReg = "79632"; //id registrasi //ambil dari hasil data list
    var keterangan = "Biaya Pemeriksaan";
    var qty = "1";
    var harga = "350000";
    // var total = '350000';
    var url = "http://103.7.14.55/api/v1/costs";
    postData(url, {
        id_reg: idReg,
        keterangan: keterangan,
        qty: qty,
        harga: harga,
    }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

//melihat data konfirmasi pendaftaran
function konfirmasiList() {
    var idLph = "3B81E330-F97B-48D6-B325-0F5DF175C9EC";
    var url = "http://103.7.14.55/api/v1/invoice/" + idLph;
    var response = getData(url);

    console.log(response);
}

//melihat data jadwal audit
function jadwalAuditList() {
    // var idLph = '3B81E330-F97B-48D6-B325-0F5DF175C9EC';
    var url = "http://103.7.14.55/api/v1/audit_schedule/";
    var response = getData(url);

    console.log(response);
}

//menambah data jadwal audit
function jadwalAuditAdd() {
    var idReg = "79632"; //id registrasi //ambil dari hasil data list
    var jadwalAwal = "2022-08-20";
    var jadwalAkhir = "2022-08-23";
    var jmlHari = "4";
    var url = "http://103.7.14.55/api/v1/audit_schedule";
    postData(url, {
        id_reg: idReg,
        jadwal_awal: jadwalAwal,
        jadwal_akhir: jadwalAkhir,
        jml_hari: jmlHari,
    }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

//mengubah data jadwal audit
function jadwalAuditUpdate() {
    var idAudit = "4063";
    var idReg = "79632"; //id registrasi //ambil dari hasil data list
    var jadwalAwal = "2022-08-21";
    var jadwalAkhir = "2022-08-23";
    var jmlHari = "3";
    var url = "http://103.7.14.55/api/v1/audit_schedule/" + idAudit;
    editData(url, {
        id_reg: idReg,
        jadwal_awal: jadwalAwal,
        jadwal_akhir: jadwalAkhir,
        jml_hari: jmlHari,
    }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

//menghapus data jadwal audit
function jadwalAuditDelete() {
    var idAudit = "4063";
    var url = "http://103.7.14.55/api/v1/audit_schedule/" + idAudit;
    var response = deleteData(url);

    console.log(response);
}

//menampilkan list data seluruh auditor
function periksaListAuditor() {
    var url = "http://103.7.14.55/api/v1/reg_auditor";
    var response = getData(url);

    console.log(response);
}

//menambahkan auditor
function periksaAuditorAdd() {
    var idReg = "79632"; //id registrasi //ambil dari hasil data list
    var auditorId = "F0D51FC3-8D7D-418F-9CC9-213606753069";
    var createBy = "BBSPJIT";
    var url = "http://103.7.14.55/api/v1/reg_auditor";
    postData(url, {
        id_reg: idReg,
        auditor_id: auditorId,
        create_by: createBy,
    }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

//menghapus auditor
function periksaAuditorDelete() {
    var idReg = "79632";
    var url = "http://103.7.14.55/api/v1/reg_auditor/" + idReg;
    var response = deleteData(url);

    console.log(response);
}

//menampilkan list data auditor LPH
function checkAuditorList() {
    var idLph = "3B81E330-F97B-48D6-B325-0F5DF175C9EC"; //id lph??
    var url = "http://103.7.14.55/api/v1/check_auditor_list/" + idLph;
    var response = getData(url);

    console.log(response);
}

//menambahkan auditor
function auditResult() {
    var idReg = "79632"; //id registrasi //ambil dari hasil data list

    var keterangan = "okeeyyyy";
    var tglSelesai = "2022-08-23";
    var hasilAudit = "PR001";
    var url = "http://103.7.14.55/api/v1/audit_result";
    postData(url, {
        id_reg: idReg,
        keterangan: keterangan,
        tgl_selesai: tglSelesai,
        hasil_audit: hasilAudit,
    }).then((data) => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
}

//menampilkan data-data referensi/master
function ref() {
    var keywords = "STOFF";
    var orderDir = "asc";
    var limit = 40;
    var url =
        "http://103.7.14.55/api/v1/ref?keywords=" +
        keywords +
        "&order_dir=" +
        orderDir +
        "&limit=" +
        limit;
    var response = getData(url);

    console.log(response);
}

function generateTable(elTargetClass, dataArr, callback) {
    const tableHtml = `
    <table class="table">
        <thead>
            <tr>
                <th scope="col">No</th>
                <th scope="col">ID Reg</th>
                <th scope="col">Nama PU</th>
                <th scope="col">Nama PU Alt</th>
                <th scope="col"></th>
                <th scope="col"></th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>`;

    document.querySelector(elTargetClass).innerHTML = tableHtml;

    let html = "";
    dataArr.forEach((d, index) => {
        html += `
    <tr>
        <th scope="row">${index + 1}</th>
        <td data-table-name="idreg">${d.id_reg}</td>
        <td>${d.nama_pu}</td>
        <td>${d.nama_pu_alt}</td>
        <td><button type="button" class="btn btn-info btn-sm text-white w-100" data-table-btn="lihat-detail">Lihat Detail</button></td>
        <td><button type="button" class="btn btn-warning btn-sm w-100" data-table-btn="status">Status</button></td>
    </tr>`;
    });
    document.querySelector(".data-list-table table tbody").innerHTML = html;

    $('[data-table-btn="lihat-detail"]').on("click", function (ev) {
        let idReg = $(this)
            .parent("td")
            .siblings('[data-table-name="idreg"]')
            .text();

        let currentData = dataArr.find(function (obj) {
            return obj.id_reg === +idReg;
        });

        lihatDetailData(currentData);
    });

    if (callback) {
        callback();
    }
}

function lihatDetailData(data) {
    $("#dataDetailModal").modal("show");
    console.log(data);
    document.querySelector('.dataDetailModalTitle').innerHTML = data.nama_pu;
    let showData = [
        'id_reg',
        'no_daftar',
        'tgl_daftar',
        'nama_pu',
        'alamat_pu',
        'kota_pu',
        'prov_pu',
        'jenis_usaha',
        'skala_usaha',
        'jenis_produk',
        'merk_dagang',
        'area_pemasaran',
        'nama_pj',
        'no_kontak_pj',
        'email_pj',
        'tgl_penerimaan_dok',
        'diterima_oleh',
        'taken_by',
        'no_mohon',
        'tgl_mohon',
        'file_ttd',
        'id_pu',
        'nama_pu_alt',
    ];
    let factoriesData = [
        'id_pabrik',
        'nama',
        'alamat',
        'provinsi',
        'kode_pos'
    ];
    let productsData = [
        'id_reg_prod',
        'reg_prod_name',
        'foto_produk'
    ];
    let penyeliaData = [
        'penyelia_id',
        'no_sertifikat',
        'tgl_sertifikat',
        'no_sk',
        'tgl_sk',
        'no_kontak'
    ];
    let documentsData = [
        'dok_id',
        'file_dok',
        'tipe_dok',
        'ket_lainnya',
        'ck_list'
    ];
    dataMohon(data.id_reg)
        .then(detail => {
            console.log(detail.payload);
            let det = detail.payload;
            for (const property in det) {
                // console.log(`${property}: ${det[property]}`);
                if (Array.isArray(det[property])) {
                    document.querySelector('.dataDetailContext').innerHTML += `<b>${property}</b><br>`;
                    det[property].forEach(function (prop) {
                        for (const p in prop) {
                            if (factoriesData.includes(p) || productsData.includes(p) || penyeliaData.includes(p) || documentsData.includes(p)) {
                                document.querySelector('.dataDetailContext').innerHTML += `${p}: ${prop[p]}<br>`;
                            }
                            // console.log(`${p}: ${prop[p]}`);
                        }
                        document.querySelector('.dataDetailContext').innerHTML += `<br>`;
                    });
                }
                else if (typeof property != 'object') {
                    // for (const p in property) {
                    if (showData.includes(property)) {
                        document.querySelector('.dataDetailContext').innerHTML += `${property}: ${det[property]}<br>`;
                    }
                    // }
                }
                // else {
                //     document.querySelector('.dataDetailContext').innerHTML += `${property}: ${det[property]}<br>`;
                // }
            }
        });
}

$("#dataDetailModal").on('hide.bs.modal', function () {
    document.querySelector('.dataDetailContext').innerHTML = '';
    document.querySelector('.dataDetailModalTitle').innerHTML = '';
});
