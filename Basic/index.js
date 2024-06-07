// !Note:
// Lengkapi kode dibawah supaya ketika fungsi main dijalankan, menghasilkan output yang sesuai
// Gunakan promise untuk membuat fungsi asynchronus

// Data
// !Note: Object user terdiri dari attribut name, email dan password
const users = [
    { name: "javid", email: "javid@binar.com", password: "123456" },
    { name: "ario", email: "ario@binar.com", password: "ario123" },
    { name: "ismail", email: "ismail@binar.com", password: "ismail123" },
    { name: "faruuq", email: "faruuq@binar.com", password: "faruuq123" }
];

async function createUser(user) {
    // TODO: Lengkapi fungsi supaya dapat memasukkan object user dari parameter kedalam array users
    // Case berhasil memberikan response berupa object user yang baru dibuat
    // Berikan case untuk error user sudah tersedia
    const foundUser = await getUserByEmail(user.email)
    return new Promise((resolve, reject) => {
        if (!foundUser) {
            users.push(user);
            resolve(user);
        } else {
            reject('Gagal menyimpan');
        }
    })
}

async function getUserByEmail(email) {
    // TODO: Lengkapi fungsi ini supaya dapat mengembalikkan object user
    // Case berhasil memberikan response berupa object user sesuai dengan email yang diinput
    // Berikan case untuk error user tidak ditemukan (dalam bentuk string)
    return new Promise((resolve, reject) => {
        const user = users.find(user => user.email === email);
        user ? resolve(user) : reject('user tidak ditemukan')
    })
}

async function login(email, password) {
    // TODO: Buatlah sebuah function untuk melakukan pengecekan email dan password
    // Case berhasil memberikan response berupa message "login berhasil" dalam format string
    // Buatlah case error untuk email tidak tersedia & email / password salah
    return new Promise((resolve, reject) => {
        getUserByEmail(email).then(retrievedUser => {
            (retrievedUser.password === password) ? resolve('login berhasil') : reject('email / password salah');
        }).catch(reason => {
            reject(reason);
        })
    });
}

async function main() {
    const userToCreate = {
        name: "Adhi",
        email: "Adhi@binar.com",
        password: "adhi12345"
    }

    const userExist = {
        name: "faruuq",
        email: "faruuq@binar.com",
        password: "faruuq123"
    }

    try {
        const newUser = await createUser(userToCreate);
        console.log('user berhasil ditambahkan: ', newUser);

        // const loginMessage = await login(newUser.email, "adhi12345");
        // console.log(loginMessage);
    } catch (error) {
        console.log('Error:', error);
    }

    // TODO:
    // 1. Lakukan penambahan data user
    // 2. Lakukan login menggunakan data yang baru dibuat di atas
    // !Note: Pastikan membuat beberapa studi kasus supaya kondisi error dapat berhasil terexecute
    // !Note: Gunakan try catch untuk mendapatkan error message
}

main();