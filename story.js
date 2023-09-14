
let arr = [
    {
        dp: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        fullStory: "https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        fullStory: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bW9kZWwlMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        fullStory: "https://plus.unsplash.com/premium_photo-1690366917352-3bd8bc0a0761?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        fullStory: "https://images.unsplash.com/photo-1633537266841-1efbef449625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGZyaWVuZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
        fullStory: "https://plus.unsplash.com/premium_photo-1670884128203-eae518070524?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpZW5kfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
    },

    {
        dp: "https://images.unsplash.com/photo-1524601500432-1e1a4c71d692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=900&q=60",
        fullStory: "https://images.unsplash.com/photo-1687360441042-a3eb360f3db1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
]


let storyBox = "";
arr.forEach(function(obj,index){
    storyBox += `<div class="story">
    <img id="${index}" src="${obj.dp}" alt="">
</div>`
})

document.querySelector("#stories").innerHTML = storyBox;

document.querySelector("#stories").addEventListener("click", function(details){
    document.querySelector("#fullScreen").style.display = "block"
    document.querySelector("#fullScreen").style.backgroundImage = `url(${arr[details.target.id].fullStory})`


    setTimeout(function(){
        document.querySelector("#fullScreen").style.display = "none"
    },3000)
});



