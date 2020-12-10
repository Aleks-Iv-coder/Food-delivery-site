// POST ЗАПРОС НА СЕРВЕР К БАЗЕ ДАННЫХ
    const postData = async (url, data) => {
        const result = await fetch (url, {  // настраиваем запрос
            method: "POST",
            headers: {
                'Content-type': "application/json"
            },
            body: data
        });
        return await result.json(); // обрабатываем ответ из формата json в обычный масив
    };

// GET ЗАПРОС НА СЕРВЕР К БАЗЕ ДАННЫХ
    const getResurce = async (url) => {
        const result = await fetch (url);
    
        if (!result.ok) {
            throw new Error (`Could not fetch ${url}, status: ${result.status}`); // проверка на ошибки
        }
        return await result.json(); // обрабатываем ответ из формата json в обычный масив
        };

    export {postData};
    export {getResurce};