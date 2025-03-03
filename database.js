fetch("database.json")
.then(res => res.json())
.then(data => {
    data.Segunda.forEach((exercise, count) => {
        if (exercise !== "Descanso") {
            const exercise_name = document.createElement("p")
            exercise_name.textContent = exercise

            const peso = document.createElement("input")
            peso.id = `peso_seg ${count}`
            peso.placeholder = "Peso"
            peso.className = "Peso"


            const rep = document.createElement("input")
            rep.id = `rep_seg ${count}`
            rep.placeholder = "Reps"
            rep.className = "Reps"


            const sets = document.createElement("input")
            sets.id = `sets_seg ${count}`
            sets.placeholder = "Sets"
            sets.className = "Sets"


            peso.value = localStorage.getItem(peso.id)
            rep.value = localStorage.getItem(rep.id)
            sets.value = localStorage.getItem(sets.id)
            
            treinos.segunda.append(exercise_name)

            treinos.segunda.append(peso)

            treinos.segunda.append(rep)

            treinos.segunda.append(sets)

        }

    })

    data.Terca.forEach((exercise, count) => {
        const exercise_name = document.createElement("p")
        exercise_name.textContent = exercise

        treinos.terca.append(exercise_name)

        if (exercise !== "Descanso") {
            const peso = document.createElement("input")
            peso.id = `peso_ter ${count}`
            peso.placeholder = "Peso"
            peso.className = "Peso"


            const rep = document.createElement("input")
            rep.id = `rep_ter ${count}`
            rep.placeholder = "Reps"
            rep.className = "Reps"


            const sets = document.createElement("input")
            sets.id = `sets_ter ${count}`
            sets.placeholder = "Sets"
            sets.className = "Sets"


            peso.value = localStorage.getItem(peso.id)
            rep.value = localStorage.getItem(rep.id)
            sets.value = localStorage.getItem(sets.id)

            treinos.terca.append(peso)

            treinos.terca.append(rep)

            treinos.terca.append(sets)
        }

    })

    data.Quarta.forEach((exercise, count) => {
        const exercise_name = document.createElement("p")
        exercise_name.textContent = exercise

        treinos.quarta.append(exercise_name)

        if (exercise !== "Descanso") {
            const peso = document.createElement("input")
            peso.id = `peso_qua ${count}`
            peso.placeholder = "Peso"
            peso.className = "Peso"


            const rep = document.createElement("input")
            rep.id = `rep_qua ${count}`
            rep.placeholder = "Reps"
            rep.className = "Reps"


            const sets = document.createElement("input")
            sets.id = `sets_qua ${count}`
            sets.placeholder = "Sets"
            sets.className = "Sets"


            peso.value = localStorage.getItem(peso.id)
            rep.value = localStorage.getItem(rep.id)
            sets.value = localStorage.getItem(sets.id)

            treinos.quarta.append(peso)

            treinos.quarta.append(rep)

            treinos.quarta.append(sets)
        }

    })

    data.Quinta.forEach((exercise, count) => {
        const exercise_name = document.createElement("p")
        exercise_name.textContent = exercise

        treinos.quinta.append(exercise_name)

        if (exercise !== "Descanso") {

            const peso = document.createElement("input")
            peso.id = `peso_qui ${count}`
            peso.placeholder = "Peso"
            peso.className = "Peso"


            const rep = document.createElement("input")
            rep.id = `rep_qui ${count}`
            rep.placeholder = "Reps"
            rep.className = "Reps"


            const sets = document.createElement("input")
            sets.id = `sets_qui ${count}`
            sets.placeholder = "Sets"
            sets.className = "Sets"


            peso.value = localStorage.getItem(peso.id)
            rep.value = localStorage.getItem(rep.id)
            sets.value = localStorage.getItem(sets.id)

            treinos.quinta.append(peso)

            treinos.quinta.append(rep)

            treinos.quinta.append(sets)
        }

    })

    data.Sexta.forEach((exercise, count) => {
        const exercise_name = document.createElement("p")
        exercise_name.textContent = exercise

        treinos.sexta.append(exercise_name)

        if (exercise !== "Descanso") {

            const peso = document.createElement("input")
            peso.id = `peso_sexta ${count}`
            peso.placeholder = "Peso"
            peso.className = "Peso"


            const rep = document.createElement("input")
            rep.id = `rep_sexta ${count}`
            rep.placeholder = "Reps"
            rep.className = "Reps"


            const sets = document.createElement("input")
            sets.id = `sets_sexta ${count}`
            sets.placeholder = "Sets"
            sets.className = "Sets"


            peso.value = localStorage.getItem(peso.id)
            rep.value = localStorage.getItem(rep.id)
            sets.value = localStorage.getItem(sets.id)

            treinos.sexta.append(peso)

            treinos.sexta.append(rep)

            treinos.sexta.append(sets)
        }

    })
    
})