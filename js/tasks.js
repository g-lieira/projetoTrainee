function deveres()
{
    const input = document.getElementById('input');
    const valorInput = input.value; 
    input.value = "";

    if(valorInput != ""){
        /*card ToDo*/
        const div = document.getElementById('div1');
            
        /*tabela*/
        const table = document.createElement('table');
        div.appendChild(table);

        /*primeira e unica linha da tebela*/
        const tr = document.createElement('tr');
        table.appendChild(tr);

        /*coluna 1 da tabela (tarefa a adicionar)*/
        const td1 = document.createElement('td');
        tr.appendChild(td1);

        const p = document.createElement('p');
        p.innerHTML = valorInput;
        td1.appendChild(p);

        /*coluna 2 da tabela (botões)*/
        const td2 = document.createElement('td');
        td2.id = 'button';
        tr.appendChild(td2);

        const seta = document.createElement('button')
        seta.id = 'seta';
        td2.appendChild(seta);

        const del = document.createElement('button');
        del.id = 'del';
        td2.appendChild(del);

        del.addEventListener("click", () => {
            table.remove();
        });

        seta.addEventListener("click", () => {
            table.remove();
            const doing = p.innerHTML;

            /*card doing*/
            const div2 = document.getElementById('div2');

            /*tabela doing*/
            const table2 = document.createElement('table');
            div2.appendChild(table2);

            /*primeira e unica linha tabela doing*/
            const tr2 = document.createElement('tr');
            table2.appendChild(tr2);

            /*coluna 1 da tebela doing (tarefa adicionada)*/
            const doingTd = document.createElement('td');
            tr2.appendChild(doingTd);

            const p2 = document.createElement('p');
            p2.innerHTML = doing;
            doingTd.appendChild(p2);

            /*coluna 2 da tabela doing (botões)*/
            const doingTd2 = document.createElement('td');
            doingTd2.id = 'button';
            tr2.appendChild(doingTd2);

            const check = document.createElement('button');
            check.id = 'check';
            doingTd2.appendChild(check);

            const del2 = document.createElement('button');
            del2.id = 'del';
            doingTd2.appendChild(del2);

            del2.addEventListener("click", () => {
                table2.remove();
            });

            check.addEventListener("click", () => {
                table2.remove();
                const done = p2.innerHTML;

                /*card done*/
                const div3 = document.getElementById('div3');
            
                /*tabela done*/
                const table3 = document.createElement('table');
                div3.appendChild(table3);

                const tr3 = document.createElement('tr');
                table3.appendChild(tr3);
                
                const doneTd = document.createElement('td');
                tr3.appendChild(doneTd);

                const p3 = document.createElement('p');
                p3.id = 'pDiferenciado';
                p3.innerHTML = done;
                doneTd.appendChild(p3);
                

                const doneTd2 = document.createElement('td');
                doneTd2.id = 'button';
                tr3.appendChild(doneTd2);

                const retorna = document.createElement('button');
                retorna.id = 'return';
                doneTd2.appendChild(retorna);

                const del3 = document.createElement('button');
                del3.id = 'del';
                doneTd2.appendChild(del3);

                del3.addEventListener("click", () => {
                    table3.remove();
                });

                retorna.addEventListener("click", () => {
                    table3.remove();
                    input.value = p3.innerHTML;
                    deveres();
                });

            });

        });
    }else{
        //nao adiciona caso nao tenha nada no input
    }
    
}




