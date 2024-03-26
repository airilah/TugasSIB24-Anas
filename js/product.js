let endpoint = 'https://crudcrud.com/api/c7238af8af6d43d0931804544c2f1ade/product/';

    fetch(endpoint)
        .then((response) => response.json())
        .then((res) => {
            let datas = res;

            datas.forEach(data_produk => {
                document.getElementById("data_produk").innerHTML +=
                `
                <tr>
                    <td> ${data_produk.nama_produk} </td>
                    <td> ${data_produk.jumlah} </td>
                    <td> ${data_produk.harga} </td>
                    <td>
                        <a href="#" class="tombol tombol-edit" onclick="edit_data('${data_produk._id}')"> Edit </a>
                        <a href="#" class="tombol tombol-delete" onclick="delete_data('${data_produk._id}')"> Delete </a>
                    </td>
                </tr>
                `;
            });
        })
        .catch((error) => {
            document.querySelector(".error").innerText = error.message;
            document.querySelector(".error").style.display = "block";
        });

// menampilkan data di card
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        let tableContent = '';
        datas.forEach(product_item => {
            tableContent += `
            <div class="card">
                <h4> ${product_item.nama_produk} </h4>
                <p> Rp. ${product_item.harga} </p>
                <p> Stok : ${product_item.jumlah} </p>
            </div>
            `;
        });

        document.getElementById("list_produk").innerHTML = tableContent;
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });


function tambah_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("nama_produk").value;
    const input_jumlah = document.getElementById("jumlah").value;
    const input_harga = document.getElementById("harga").value;

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk,
            jumlah: input_jumlah,
            harga: input_harga,
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menambahkan data';
        document.querySelector(".error").style.display = "block";
    });
}


function edit_data(id_product) {
    document.querySelector(".tambah").style.display = "none";
    document.querySelector(".edit").style.display = "block";

    fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        const product = datas.find(data => data._id === id_product);
        document.getElementById("id_produk").value = product._id;
        document.getElementById("edit_nama_produk").value = product.nama_produk;
        document.getElementById("edit_jumlah").value = product.jumlah;
        document.getElementById("edit_harga").value = product.harga;
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });
}

function update_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("edit_nama_produk").value;
    const input_jumlah = document.getElementById("edit_jumlah").value;
    const input_harga = document.getElementById("edit_harga").value;
    const input_id_produk = document.getElementById("id_produk").value;

    // Perbaikan penamaan properti pada body JSON
    fetch(`${endpoint}${input_id_produk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk, // Perbaikan penamaan properti
            jumlah: input_jumlah,
            harga: input_harga
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal mengupdate data';
        document.querySelector(".error").style.display = "block";
    });
}



// menghapus data
function delete_data(id_product) {
    fetch(`${endpoint}${id_product}`, {
        method: 'DELETE',
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menghapus data';
        document.querySelector(".error").style.display = "block";
    });
}