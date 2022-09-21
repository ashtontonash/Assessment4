let motivations = ["You never know what tomorrow holds!", "Your efforts are appreciated, don't give up!", "You have the power to pave a way to your future!"];

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },


    getMotivation: (req, res) => {
       
        let randomIndex2 = Math.floor(Math.random() * motivations.length);
        let randomMotivation = motivations[randomIndex2];
      
        res.status(200).send(randomMotivation);

    },

   
    newMotivation: (req, res) => {

        let {new} = req.body

        motivations.push(new)
        
        res.status(200).send(motivations)

    }, 

    updateMotivation: (req, res) => {

        let { id, update} = req.body
        motivations[id] = update
        res.status(200).send('Update worked!')
        

    },

    deleteMotivation: (req, res) => {

        let { id } = req.params
        motivations.splice(+id, 1)
        res.status(200).send('Successfully deleted!')
    }
}

