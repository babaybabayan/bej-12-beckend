let users = [
    { name: "javid", email: "javid@binar.com", password: "123456" },
    { name: "ario", email: "ario@binar.com", password: "ario123" },
    { name: "ismail", email: "ismail@binar.com", password: "ismail123" },
];

async function updateUserByEmail(user) {
    // TODO: Buatlah function untuk mengupdate data user berdasarkan email 
    // Kembalikkan error jika user tidak ada
    // !Clue: bisa buat array baru yang sesuai dengan input parameter, 
    // lalu value dari array baru dimasukkan ke array lama
    const index = users.findIndex(u => u.email === user.email);
    return new Promise((resolve, reject) => {
        if (index === -1) {
            reject("User not found");
        }

        users[index] = { ...users[index], ...user };

        resolve(users);
    })
}

async function deleteUserByEmail(email) {
    // TODO: Buatlah function untuk menghapus data user berdasarkan email
    // Kembalikkan error jika user tidak ada
    // !Clue: bisa buat array baru yang sesuai dengan input parameter, 
    // lalu value dari array baru dimasukkan ke array lama
    return new Promise((resolve, reject) => {
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                users.splice(i, 1);
                resolve(users);
            }
        }
        reject("User not found");
    })
}

async function getListUser() {
    return users;
}

async function main() {
    let newUsers = [
        { name: "akbar", email: "akbar@binar.com", password: "123456" },
        { name: "abu", email: "abu@binar.com", password: "abu123" },
        { name: "ruray", email: "ruray@binar.com", password: "rurayl123" },
    ];

    let newUser = { name: "newismail", email: "ismail@binar.com", password: "newismail123" };

    try {
        // let updagteEmails = await updateUserByEmail(newUser);
        let deleteEmails = await deleteUserByEmail(newUser.email);
        console.log(deleteEmails);
    } catch (error) {
        console.log('error', error);
    }
}

main()