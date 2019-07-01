var members = ['rizki','dodi','qaiserab'];

members.forEach(member => {
    console.log(member);
});

members.forEach((member,index) => {
    console.log(member + '  '+ index);
});


let sekolahKoding = {
    members :
     ['rizki','dodi','quieser'],
    getMember(){
        this.members.map(function(name){
            console.log(this);
        });
    }
};


console.log(sekolahKoding.getMember());