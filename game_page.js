player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question_turn-"+player1_name;
document.getElementById("player_answer").innerHTML="Answer_turn-"+player2_name;

function Send(){
get_word=document.getElementById("word").value;
word=get_word.toLowerCase();
c1=word.charAt(1);
l=math.floor(word.length/2);
c2=word.charAt(l);
l2=word.length-1;
c3=word.charAt(l2);
remove_c1=word.replace(c1,"_");
remove_c2=remove_c1.replace(c2,"_");
remove_c3=remove_c2.replace(c3,"_");

}