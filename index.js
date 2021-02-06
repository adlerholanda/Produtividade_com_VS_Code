const saudacao = () => {
    var data = new Date()
    console.log(data)
    return data.getHours() <= 12? "Bom dia": data.getHours < 18? "Boa tarde": "Boa noite";
}

console.log(saudacao()+`, GitHubers!`)