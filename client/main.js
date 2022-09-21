const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const motivationBtn = document.getElementById("motivationButton")

const getMotivation = () => {
    axios.get("http://localhost:4000/api/motivation/")
    .then(res => {
        const data = res.data;
        alert(data);
    })
}

motivationBtn.addEventListener('click', getMotivation)

const newMotivationBtn = document.getElementById('newMotivationBtn')

const newMotivation = () => {
    let motivationTextBox = document.getElementById("newMotivation")
    axios.post('http://localhost:4000/api/motivation/', {new: motivationTextBox.value})
    .then(res => {
        alert(res.data)
        motivationTextBox.value = ''
    })
}

newMotivationBtn.addEventListener('click', newMotivation)

const updateMotivationButton = document.getElementById('updateMotivationBtn')

const updateMotivation = () => {
    let motivationTextBox = document.getElementById("newMotivation")
    let id = document.getElementById("updateMotivation")
    axios.put('http://localhost:4000/api/motivation/', {update: motivationTextBox.value, id: +id.value})
    .then(res => {
        alert(res.data)
        motivationTextBox.value = ''
        id.value = ''
    })
}

updateMotivationButton.addEventListener('click', updateMotivation)

const deleteMotivationBtn = document.getElementById('deleteMotivation')

const deleteMotivation = () => {
    let id = document.getElementById('updateMotivation')
    axios.delete(`http://localhost:4000/api/motivation/${id}`)
    .then(res => {
        alert(res.data)
        id.value = ''
        
    })
}