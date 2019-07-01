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

generateTitle = () => {
    return 'Ini judul standar'
}
createTag = (title, tag) => {
    tag = tag || 'CSS' //memberikan nilai default tag

    if (typeof tag === 'undefined'){
        tag = 'css'
    }
    console.log('Forum '+title+' punya tag '+tag)
}

createTag('tampilan rusak');