const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const play = $('.player')
const progress = $('#progress')
const prevBtn = $('.btn-prev')
const nextBtn = $('.btn-next')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [{
            name: 'Chắc ai đó sẽ về',
            singer: 'Vicetone',
            path: '../codeMSPlayer/music/CADOSV.mp3',
            image: '../codeMSPlayer/image/chacaidoseve.png'

        },
        {
            name: 'Unstoppable',
            singer: 'Sia',
            path: '../codeMSPlayer/music/unstopblae.mp3',
            image: '../codeMSPlayer/image/unstoppable.png'

        },
        {
            name: 'Cô gái bàn bên',
            singer: 'Đen Vâu & Lynk lee',
            path: '../codeMSPlayer/music/CGBB.mp3',
            image: '../codeMSPlayer/image/CGBB.png'

        },
        {
            name: 'Enemy',
            singer: 'Imagine Dragon',
            path: '../codeMSPlayer/music/enemy.mp3',
            image: '../codeMSPlayer/image/enemy.png'

        },
        {
            name: 'ABCDFU',
            singer: 'Tyler Shaw',
            path: '../codeMSPlayer/music/abcdfu.mp3',
            image: '../codeMSPlayer/image/abcd.png'

        },
        {
            name: 'style',
            singer: 'Taylor Swift',
            path: '../codeMSPlayer/music/style.mp3',
            image: '../codeMSPlayer/image/style.png'

        },
        {
            name: 'I dont wanna live forever',
            singer: 'Taylor Swift & Zayn',
            path: '../codeMSPlayer/music/forever.mp3',
            image: '../codeMSPlayer/image/forever.png'

        },
        {
            name: 'Hạnh phúc mới',
            singer: 'Sơn Tùng',
            path: '../codeMSPlayer/music/hpm.mp3',
            image: '../codeMSPlayer/image/hpm.png'

        },
        {
            name: 'Sài gòn đau long quá',
            singer: 'Tyler Shaw',
            path: '../codeMSPlayer/music/SGHNMR.mp3',
            image: '../codeMSPlayer/image/abcd.png'

        }

    ],
    render: function() {
        const htmls = this.songs.map((song, index) => {
            return `
            <div class="song ${index===this.currentIndex ? 'active' :''} " data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
                <h3 class="title">${song.name}</h3>
                <p class="author">${song.singer}</p>
            </div>
            <div class="option">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
            `
        })
        $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }
        })
    },
    scrollToActiveSong: function() {
        setTimeout(() => {
            $('.song.active').scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            })
        }, 300);
    },
    loadCurrentSong: function() {
        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path
    },
    nextSong: function() {
        this.currentIndex++;
        if (this.currentIndex >= this.songs.length) {
            this.currentIndex = 0
        }
        this.loadCurrentSong();
    },
    prevSong: function() {
        this.currentIndex--;
        if (this.currentIndex < 0) {
            this.currentIndex = this.songs.length - 1;
        }
        this.loadCurrentSong();
    },
    playRandomSong: function() {
        let newIndex
        do {
            newIndex = Math.floor(Math.random() * this.songs.length)
        }
        while (newIndex === this.currentIndex);

        this.currentIndex = newIndex
        this.loadCurrentSong();
    },
    handleEvents: function() {
        //xử lý khi CD xoay dừng
        const cdThumAnimate = cdThumb.animate([
            { transform: 'rotate(360deg)' }
        ], {
            duration: 10000, //10second
            iterations: Infinity
        })
        cdThumAnimate.pause()

        const _this = this
        const cdWidth = cd.offsetWidth

        //xử lý khi phóng to /thu nhỏ CD
        document.onscroll = function() {
                const scrollTop = window.scrollY || document.documentElement.scrollTop
                const newCdWidth = cdWidth - scrollTop
                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                cd.style.opacity = newCdWidth / cdWidth
            }
            // xử lý khi click play
        playBtn.onclick = function() {
                if (_this.isPlaying) {
                    audio.pause();
                } else {
                    audio.play();
                }
            }
            // xử lý khi song được play
        audio.onplay = function() {
                _this.isPlaying = true
                play.classList.add('playing')
                cdThumAnimate.play()
            }
            // khi song bị pause
        audio.onpause = function() {
                _this.isPlaying = false;
                play.classList.remove('playing')
                cdThumAnimate.pause()

            }
            // khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function() {
                if (audio.duration) {
                    const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                    progress.value = progressPercent
                }
            }
            //xử lý khi tua 
        progress.onchange = function(e) {
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime;
        }

        // xử lý khi next song
        nextBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong();

                } else {
                    _this.nextSong();

                }
                _this.render();
                audio.play();
                _this.scrollToActiveSong();

            }
            // xu ly  khi lui` song
        prevBtn.onclick = function() {
                if (_this.isRandom) {
                    _this.playRandomSong();

                } else {
                    _this.prevSong();

                }
                _this.render();
                audio.play();
                _this.scrollToActiveSong();
            }
            // bat tat random song
        randomBtn.onclick = function() {
                _this.isRandom = !_this.isRandom
                randomBtn.classList.toggle('active', _this.isRandom)
            }
            //xử lý lặp lại 1 song 
        repeatBtn.onclick = function(e) {
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        // khi kết thúc bài hát 
        audio.onended = function() {
            if (_this.isRepeat) {
                audio.play();
            } else {
                audio.click();
            }
        }

        playlist.onclick = function(e) {
            const songNode = e.target.closest('.song:not(.active)')
            if (songNode || !e.target.closest('.option')) {

                if (songNode) {

                    _this.currentIndex = Number(songNode.dataset.index);
                    _this.loadCurrentSong();
                    audio.play();
                    _this.render();

                }
                if (e.target.closest('.option')) {

                }
            }
        }

    },

    start: function() {
        //Định nghĩa các thuộc tính cho object
        this.defineProperties();
        // lắng nghe các sự kiện DOM
        this.handleEvents();
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng   
        this.loadCurrentSong();
        // Render playlist
        this.render();
    }
}


app.start();