document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('posts')) {
        const postsSection = document.getElementById('posts');
        const recentPostsList = document.getElementById('recent-posts');

        // Lista de posts
        const posts = [
            {
                title: 'Primeiro post aqui',
                content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent aliquam risus vitae volutpat tempus. Integer eget nibh non urna iaculis tincidunt nec vehicula nunc. Nunc consectetur fermentum arcu at venenatis. Duis egestas aliquet orci, sed rutrum est fermentum ut. Mauris tincidunt luctus tellus, ac efficitur augue suscipit a. Nullam sit amet magna ligula. Pellentesque quam quam, pretium a enim quis, consectetur malesuada mauris. Nulla porta mattis ipsum quis ornare. Phasellus id feugiat eros. Vestibulum sit amet mauris purus.

                Donec eleifend diam quis sapien semper malesuada. Ut ex odio, venenatis ac accumsan eu, aliquam vitae dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec posuere ac ligula vitae viverra. Ut mi sem, lacinia nec turpis et, condimentum porttitor neque. Curabitur tempor varius porttitor. Vivamus blandit, nibh eget fringilla eleifend, libero est auctor erat, non euismod sem augue sit amet tortor. Pellentesque eu magna tellus. Ut sit amet velit tellus. Sed eget nulla cursus, imperdiet leo eget, fermentum sapien. Suspendisse nunc felis, faucibus non mattis vel, vulputate vitae risus. Morbi ultrices, urna eu lobortis cursus, tellus velit faucibus leo, non aliquam neque lorem quis nibh. Integer aliquet rutrum diam, et placerat arcu eleifend ac. Nulla ut gravida orci.
                
                Phasellus rhoncus tellus id neque sollicitudin hendrerit. Vivamus vel feugiat tortor. Maecenas ut porttitor dui. Donec eleifend, turpis ac tincidunt efficitur, dolor nisl tempor ex, non elementum lacus purus in purus. Duis rutrum non elit id faucibus. Vivamus commodo dui vel placerat pretium. Nam et finibus quam. Phasellus mattis, nunc nec ultrices venenatis, lorem sapien facilisis diam, nec tristique sem nisl id dui. Praesent imperdiet pulvinar lacinia. Integer ut magna in leo bibendum euismod. Nullam rutrum nisl et diam posuere vulputate. Vestibulum mi odio, condimentum sed neque at, luctus facilisis turpis. Quisque convallis metus a nisi gravida, id semper lacus molestie.
                
                Suspendisse porta lacus ac pretium bibendum. Suspendisse lorem ipsum, bibendum a bibendum vitae, viverra semper sapien. Sed in lacus semper diam cursus consequat. Proin libero lectus, auctor vel massa sodales, viverra accumsan quam. Aliquam semper tellus tortor, quis pretium elit posuere a. Morbi ante nisi, imperdiet sed elit eget, pharetra mollis sem. Suspendisse semper imperdiet felis, nec ornare tellus sodales sit amet. Quisque odio tellus, ullamcorper ac pharetra ac, mollis sed odio.</p>
            {
                title: 'Exemplo de Código em Python',
                content: `
                    <p>Python é uma linguagem de programação de alto nível com sintaxe clara e legível.</p>
                    <pre><code class="language-python">
def greet(name):
    return f'Olá, {name}!'
print(greet('Mundo'))
                    </code></pre>
                `
            }
        ];

        // Função para adicionar um post
        function addPost(post) {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `<h2>${post.title}</h2>${post.content}`;
            postsSection.appendChild(postElement);

            // Adiciona o título do post na lista de postagens recentes
            const recentPostElement = document.createElement('li');
            recentPostElement.textContent = post.title;
            recentPostsList.appendChild(recentPostElement);
        }

        // Adiciona todos os posts
        posts.forEach(post => addPost(post));
    }
});