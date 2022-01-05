let mySport:Sport[] = [
    new Swimming(false,true,true),
    new Soccer(false,'Barcelona')
]
for(const sport of mySport){
    console.log(sport.toString());
    console.log(`Num of awards `)
}