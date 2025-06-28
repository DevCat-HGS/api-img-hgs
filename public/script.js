        // Esta función se ejecutará cuando la página cargue
        document.addEventListener('DOMContentLoaded', function() {
            // Aquí podrías cargar dinámicamente la lista de imágenes disponibles
            // Por ahora, mostraremos ejemplos estáticos
            const imageExamples = [
                { name: 'senacloud-logo.png', type: 'PNG' },
                { name: 'senacloud-logo.svg', type: 'SVG' },
                { name: 'ver.png', type: 'PNG' },
                { name: 'ocultar.png', type: 'PNG' },
                { name: 'UI.png', type: 'PNG' },
                { name: 'IA.png', type: 'PNG' },
                { name: 'soporte.png', type: 'PNG' },
                { name: 'Sennova.png', type: 'PNG' },
                { name: 'sena-negro.png', type: 'PNG' },
                { name: 'sena-verde.png', type: 'PNG' },
                { name: 'cursor.png', type: 'PNG' },
                
                // Agrega más ejemplos según sea necesario
            ];
            
            const videoExamples = [
                { name: 'ejemplo.html', type: 'Video Animado' }
                // Agrega más ejemplos según sea necesario
            ];
            
            const imageList = document.getElementById('image-list');
            const videoList = document.getElementById('video-list');
            
            imageExamples.forEach(img => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `/img/${img.name}`;
                link.textContent = `${img.name} (${img.type})`;
                link.target = '_blank';
                listItem.appendChild(link);
                imageList.appendChild(listItem);
            });
            
            videoExamples.forEach(video => {
                const listItem = document.createElement('li');
                const link = document.createElement('a');
                link.href = `/videos/${video.name}`;
                link.textContent = `${video.name} (${video.type})`;
                link.target = '_blank';
                listItem.appendChild(link);
                videoList.appendChild(listItem);
            });
        });