class Form{
    constructor(){
        this.sbutton = createButton('Save');
        this.sbutton.style('width','100px');
        this.sbutton.style('height','50px');
        this.sbutton.style('background-color','lightpink')
        this.cbutton = createButton('Clear');
        this.cbutton.style('width','100px');
        this.cbutton.style('height','50px');
        this.cbutton.style('background-color','lightpink')
    }
    display(){
        this.sbutton.position(180,50)
        this.cbutton.position(55,50)
    }
}