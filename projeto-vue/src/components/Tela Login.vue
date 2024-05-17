<template> 
    <div class="container">
        <label> Gasto Diário
            <input v-model="gastoDiario" id="gastoDiario" type="number"> 
        </label>

        <label> Gasto Semanal
            <input v-model="gastoSemanal" id="gastoSemanal" type="number"> 
        </label>
    </div>

    <button class="btn-enviar" @click="calcularGasto"> 
        Enviar
    </button>
</template>


<script>
    export default {
        data() {
            return {
                gastoDiario: "",
                gastoSemanal: "",
                resultado: ""
            }
        },

        methods: {
            async calcularGasto() {
                try {  
                    const response = await fetch('https://fluffy-orbit-pjrp5j757679f76wx-3000.app.github.dev/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            gastoDiario: this.gastoDiario,
                            gastoSemanal: this.gastoSemanal
                        })
                    })
                    const data = await response.json();
                    // Atualizar o estado da variável 'resultado' com a resposta da API
                    this.resultado = data.resultado; // Supondo que a API retorna um objeto com uma propriedade 'resultado

                } catch (error) {
                    console.error('Erro ao enviar gasto para a API:', error);
                }
            }
        }
    }
</script>


<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .btn-enviar {
        border-radius: 10px;
        border-color: black;
        background-color: deepskyblue;
        display: inline-block;
        color: white;
    }
</style>