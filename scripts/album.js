var albumPicasso = {
    title: 'The Colors',
    artist: 'Pablo Picasso',
    label: 'Cubism',
    year: '1881',
    albumArtUrl: 'assets/images/album_covers/01.png',
    songs: [
        { title: 'Blue', duration: '4:26' },
        { title: 'Green', duration: '3:14' },
        { title: 'Red', duration: '5:01' },
        { title: 'Pink', duration: '3:21'},
        { title: 'Magenta', duration: '2:15'}
    ]
};

var albumMarconi = {
    title: 'The Telephone',
    artist: 'Guglielmo Marconi',
    label: 'EM',
    year: '1909',
    albumArtUrl: 'assets/images/album_covers/20.png',
    songs: [
        { title: 'Hello, Operator?', duration: '1:01' },
        { title: 'Ring, ring, ring', duration: '5:01' },
        { title: 'Fits in your pocket', duration: '3:21'},
        { title: 'Can you hear me now?', duration: '3:14' },
        { title: 'Wrong phone number', duration: '2:15'}
     ]
};

var albumDavis = {
    title: 'Kind of Blue',
    artist: 'Miles Davis',
    label: 'Columbia',
    year: '1959',
    albumArtUrl: 'assets/images/album_covers/04.png',
    songs: [
        { title: 'So What', duration: '9:07' },
        { title: 'Freddie Freeloader', duration: '9:48' },
        { title: 'Blue in Green', duration: '5:35' },
        { title: 'All Blues', duration: '11:32' },
        { title: 'Flamenco Sketches', duration: '9:27' }
    ]
};

var albums = [albumPicasso, albumMarconi, albumDavis];

var createSongRow = function(songNumber, songName, songLength) {
    var template = 
        '<tr class="album-view-song-item">'
    +   '   <td class="song-item-number">' + songNumber + '</td>'
    +   '   <td class="song-item-title">' + songName + '</td>'
    +   '   <td class="song-item-duration">' + songLength + '</td>'
    ;
    
    return template;
};

var currentAlbumIndex = 0;

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {
    albumTitle.firstChild.nodeValue = album.title;
    albumArtist.firstChild.nodeValue = album.artist;
    albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
    albumImage.setAttribute('src', album.albumArtUrl);
    
    albumSongList.innerHTML = '';
    
    for(var i = 0; i < album.songs.length; i++) {
        albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
    }
};

var albumSwitcher = function() {
    currentAlbumIndex++;

    if(currentAlbumIndex == albums.length) {
        currentAlbumIndex = 0;
    }

    setCurrentAlbum(albums[currentAlbumIndex]);
};

window.onload = function() {
    setCurrentAlbum(albums[currentAlbumIndex]);
    albumImage.addEventListener("click", albumSwitcher);
};

// Click on the album cover art to toggle the next album


