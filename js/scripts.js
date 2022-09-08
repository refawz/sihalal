/*!
 * Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2022 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */
//
// Scripts
//

/**
 * Global Const
 */

const idLphBbt = "3B81E330-F97B-48D6-B325-0F5DF175C9EC"
const statusList = {
    "10010": "Dikirim ke LPH",
    "10020": "Penetapan Biaya",
    "10025": "Pembayaran",
    "10030": "Proses di LPH",
    "10040": "Selesai Proses di LPH",
    "10050": "Diterima Komisi Fatwa",
    "10060": "Proses Sidang Fatwa",
    "10070": "Selesai Sidang Fatwa",
    "10080": "Selesai"
}

/**
 * Global const end
 */

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
    var idLph = idLphBbt;
    var url = "http://103.7.14.55/api/v1/data_list/" + stat + "/" + idLph;
    getData(url)
        .then((data) => {
            return data.payload;
        })
        .then((data) => {
            generateTable(".data-list-table", data, stat);
            if (stat == '10020') {
                $('.btnBiayaList').html(
                    `<button class="btn btn-primary mt-2" onclick="biayaList()">Lihat Biaya yang Terdaftar</button>`
                );
                // console.log('cek');
            }
            else {
                $('.btnBiayaList').html('');
            }
        });
}

//detail data permohonan
function dataMohon(regId) {
    //   var regId = "79629"; //id registrasi
    var url = "http://103.7.14.55/api/v1/reg/" + regId;
    var response = getData(url);

    return response;
}

function updateStatus(statId, regId) {
    const stat = {
        "10010": "AJUAN",
        "10025": "BIAYA",
        "10030": "PERIKSA",
    }
    var idLph = idLphBbt;
    var url = "http://103.7.14.55/api/v1/data_list/updateStatus";
    postData(url, { status: stat[statId], reg_id: regId, lph_mapped_id: idLph }).then(
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
    document.querySelector('.dataBiayaListContext').innerHTML = '';
    $('#dataBiayaListModal').modal('show');
    response.then((data) => {
        let list = data.payload;
        let i = 0;
        // console.log(list);
        list.forEach(function (datas) {
            i++;
            document.querySelector('.dataBiayaListContext').innerHTML += `<b>${i}.<b><br>`;
            for (const data in datas) {
                document.querySelector('.dataBiayaListContext').innerHTML += `${data} : ${datas[data]}<br>`;
                // console.log(data);
            }
            document.querySelector('.dataBiayaListContext').innerHTML += `<br>`;
        });
    });

    // console.log(response);
}

//menambah daftar biaya pemeriksaan
function biayaAdd(data) {
    var keterangan = "Biaya Pemeriksaan";
    var url = "http://103.7.14.55/api/v1/costs";
    var response = postData(url, {
        id_reg: data.id_reg,
        keterangan: keterangan,
        qty: data.jml_produk,
        harga: data.harga,
    });

    return response;
}

//melihat data konfirmasi pendaftaran
function konfirmasiList() {
    var idLph = idLphBbt;
    var url = "http://103.7.14.55/api/v1/invoice/" + idLph;
    var response = getData(url);

    console.log(response);
}

//melihat data jadwal audit
function jadwalAuditList() {
    // var idLph = idLphBbt;
    var url = "http://103.7.14.55/api/v1/audit_schedule/";
    var response = getData(url);

    console.log(response);
}

//menambah data jadwal audit
function jadwalAuditAdd(data) {
    // var idReg = "79632"; //id registrasi //ambil dari hasil data list
    // var jadwalAwal = "2022-08-20";
    // var jadwalAkhir = "2022-08-23";
    // var jmlHari = "4";
    var url = "http://103.7.14.55/api/v1/audit_schedule";
    postData(url, { data }).then((data) => {
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
function getAuditorList() {
    var url = "http://103.7.14.55/api/v1/reg_auditor";
    var response = getData(url);

    return response;
}

//menambahkan auditor
function addAuditor(data) {
    // var idReg = "79632"; //id registrasi //ambil dari hasil data list
    // var auditorId = "F0D51FC3-8D7D-418F-9CC9-213606753069";
    // var createBy = "BBSPJIT";

    Object.assign(data, { create_by: "BBSPJIT" })
    var url = "http://103.7.14.55/api/v1/reg_auditor";
    postData(url, {
        // id_reg: idReg,
        // auditor_id: auditorId,
        // create_by: createBy,
        data
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
function getAuditorListByLph() {
    const idLphForGetAudit = "B06E9064-7958-47EA-AC12-A3F40480B70D"
    var url = "http://103.7.14.55/api/v1/check_auditor_list/" + idLphForGetAudit;
    var response = getData(url);

    return response;
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

function generateTable(elTargetClass, dataArr, stat, callback) {
    console.log(dataArr)

    const yellowButtonText = {
        "10010": "Status",
        "10020": "Tetapkan Biaya",
        "10025": "Status",
        "10030": "Status",
        "10040": "",
        "10050": "",
        "10060": "",
        "10070": "",
        "10080": ""
    }

    if (Array.isArray(dataArr)) {
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


        $(elTargetClass).find('.table-placeholder').addClass('d-none');
        $(elTargetClass).append(tableHtml);

        let html = "";
        dataArr.forEach((d, index) => {
            html += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td data-table-name="idreg">${d.id_reg}</td>
            <td>${d.nama_pu}</td>
            <td>${d.nama_pu_alt}</td>
            <td><button type="button" class="btn btn-info btn-sm text-white w-100" data-table-btn="lihat-detail">Lihat Detail</button></td>
            ${yellowButtonText[stat] ? '<td><button type="button" class="btn btn-warning btn-sm w-100" data-table-btn="action">' + yellowButtonText[stat] + '</button></td>' : ''}
        </tr>`;
        });
        document.querySelector(".data-list-table table tbody").innerHTML = html;

        function getObjFromArr(el) {
            let idReg = $(el)
                .parent("td")
                .siblings('[data-table-name="idreg"]')
                .text();

            let currentData = dataArr.find(function (obj) {
                return obj.id_reg === +idReg;
            });

            return currentData;
        }

        $('[data-table-btn="lihat-detail"]').on("click", function (ev) {
            let currentData = getObjFromArr($(this))

            lihatDetailData(currentData);
        });

        const actionBtnHandler = {
            "10010": function (currentData) {
                updateStatusAction(currentData, stat);
            },
            "10020": function (currentData) {
                addBiayaModal(currentData, stat);
            },
            "10025": function (currentData) {
                addJadwalAuditModal(currentData, stat);
            },
            "10030": function (currentData) {
                updateStatusAction(currentData, stat);
            },
            "10040": "",
            "10050": "",
            "10060": "",
            "10070": "",
            "10080": ""
        }

        $('[data-table-btn="action"]').on("click", function (ev) {
            let currentData = getObjFromArr($(this))

            actionBtnHandler[stat](currentData);
        });

        if (callback) {
            callback();
        }
    } else {
        $(elTargetClass + ' table').remove()
        $(elTargetClass + ' .table-placeholder').removeClass('d-none').find('em').text('Data tidak tersedia')
    }
}

function updateStatusAction(data, stat) {
    $("#updateStatusModal").modal("show");
}

function addBiayaModal(data) {
    const _parentEl = $("#addBiayaModal")
    let dataToSend = {}
    _parentEl.modal("show");

    document.querySelectorAll("#addBiayaModal *[data-biaya-info]").forEach(function (el) {
        if (data.hasOwnProperty(el.dataset.biayaInfo)) {
            $(el).text(data[el.dataset.biayaInfo]);
            dataToSend[el.dataset.biayaInfo] = data[el.dataset.biayaInfo]
        }
    })

    _parentEl.find("#submitAddBiaya").on("click", function (ev) {
        const captionText = `Apakah anda yakin untuk menetapkan biaya untuk ID Reg <b>${data.id_reg}</b>`;
        dataToSend.harga = _parentEl.find('[data-input-id="harga"]').val()
        showConfirmationModal(captionText, function () {
            biayaAdd(dataToSend).then(res => {
                $('.modal').modal('hide');

                showSuccessModal(`
                    <p class="mb-3 fst-italic">Biaya berhasil ditetapkan untuk ID Reg ${res.id_reg}.</p>
                    <b>Total biaya adalah Rp. ${res.total}</b>
                `)
            })
        })
    })
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

function showConfirmationModal(text, submitCallback) {
    const _parentEl = $("#confirmationModal")
    _parentEl.modal("show").find('.caption-text').html(text);

    _parentEl.find('#cancelConfirmation').on("click", function (ev) {
        _parentEl.modal('hide')
    });

    _parentEl.find('#submitConfirmation').on("click", function (ev) {
        if (submitCallback) {
            submitCallback();
        }
    });
}

function showSuccessModal(text) {
    const _parentEl = $("#successModal")
    _parentEl.modal("show").find('.caption-text').html(text);
}

function addJadwalAuditModal(data, stat) {
    var obj = {
        id_reg: idReg,
        jadwal_awal: jadwalAwal,
        jadwal_akhir: jadwalAkhir,
        jml_hari: jmlHari
    }
    const _parentEl = $("#addJadwalAuditModal")
    let dataToSendJadwalAudit = {
        reg_id: data.reg_id
    }
    let dataToSendAddAuditor = {
        reg_id: data.reg_id
    }

    getAuditorListByLph().then(data => {
        if (Array.isArray(data.payload) && data.payload.length > 0) {
            let htmlAdd = ''
            data.payload.forEach((i) => {
                htmlAdd += `<option value="${i.auditor_id}">${i.nama}</option>`
            })

            _parentEl.find('[data-input-id="auditor_id"]').html(htmlAdd);
        }
    })

    _parentEl.modal("show");

    const _jadwalAwalEl = _parentEl.find('[data-input-id="jadwal_awal"]')
    const _JadwalAkhirEl = _parentEl.find('[data-input-id="jadwal_akhir"]')
    const _jumlahHariEl = _parentEl.find('[data-input-id="jml_hari"]')
    const days = (date_1, date_2) => {
        let difference = date_1.getTime() - date_2.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }

    _jadwalAwalEl.add(_JadwalAkhirEl).on("input change", function (ev) {
        if (_jadwalAwalEl.val() && _JadwalAkhirEl.val()) {
            _jumlahHariEl.val(days(_jadwalAwalEl.val(), _JadwalAkhirEl.val()))
        }
    })

    $('#addJadwalAuditModal *[data-input-group="jadwal-audit"]').on('input change', function (el) {
        if ($(el).attr('type') == 'date') {
            dataToSendJadwalAudit[$(el).data('input-id')] = (new Date($(el).val())).getTime()
        } else {
            dataToSendJadwalAudit[$(el).data('input-id')] = $(el).val()
        }
    })

    $('#addJadwalAuditModal *[data-input-group="add-auditor"]').on('input change', function (el) {
        dataToSendAddAuditor[$(el).data('input-id')] = $(el).val()
    })

    _parentEl.find("#submitAddJadwal").on("click", function (ev) {
        const captionText = `Apakah anda yakin untuk menetapkan jadwal audit untuk ID Reg <b>${data.id_reg}</b> dan update status`;
        showConfirmationModal(captionText, function () {
            Promise.all([updateStatus(stat, data.reg_id), jadwalAuditAdd(dataToSendJadwalAudit), addAuditor(dataToSendAddAuditor)]).then(res => {
                $('.modal').modal('hide');

                showSuccessModal(`
                    <p class="mb-3 fst-italic">Jadwal audit dan update status berhasil ditetapkan.</p>
                `)
            })
        })
    })
}

