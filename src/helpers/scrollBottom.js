export default function scrollToBottom() {
    var objDiv = document.getElementsByClassName("chatroom");
    objDiv[0].scrollTop = objDiv[0].scrollHeight;
}