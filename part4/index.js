var members = ['rizki','dodi','qaiserab'];
// =================================== //
// PART 2
members.forEach(member => {
  //  console.log(member);
});

members.forEach((member,index) => {
    //console.log(member + '  '+ index);
});


let sekolahKoding = {
    members :
     ['rizki','dodi','quieser'],
    getMember(){
        this.members.map((name) => {
      //      console.log(this);
        });
    }
};


//console.log(sekolahKoding.getMember());
// =================================== //
// PART 3
//tambahkan generator untuk judul sebagai default
generateTitle = () => {
    return 'Ini judul standar'
}
createTag = (title = generateTitle(), tag = 'bebas') => {
    tag = tag || 'CSS' //memberikan nilai default tag

    if (typeof tag === 'undefined'){
        tag = 'css'
    }
  //  console.log('Forum '+title+' punya tag '+tag)
}

createTag();


// PART 4
//REST DAN SPREAD
signIn = (username, password) => {
   // console.log(username +' punya password '+password)
}

let data = ['hilman','123']
//signIn(data[0],data[1])
signIn(...data) //spread dan rest



// PART 5
//TEPMPLATE LITERAL

let username = 'hilman'
let umur = 40

//console.log(username + 'umurnya '+ umur)

//let text = "Member "+username + 'umurnya '+ umur
let text = `Member ${username} umurnya ${umur}`

let div = `
    <div> isi div </div>
    <p> isi tag p </p>
    `
//console.log(div)



// PART 6
// SHORHAND DAN DESCTURCTING

let name = 'Saputro'
let age = 40

getData = () => {
    return `member ${name} umurnya ${age}`
}
let member = {
    name, age, getData
}

//console.log(member.getData());

let memberr = {
    names: "Hilman",
    umurs : 12
}

let {umurs, names} = memberr
//console.log(umurs)

class Members {
    constructor(name,umur){
        this.name = name
        this.umur = umur
    }
}

let anggota = new Members('Hilman',23)
console.log(anggota)