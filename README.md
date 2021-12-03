Section3 Database (re)

DB�� CRUD ������ ������ ���� 

CRUD (Create, Read, Update, Delete)

---

git config --global core.autocrlf true

---


�鿣�� MVC �۵� ���


<p align="center"><img src="report_images/crud.png" width="640"\></p>

��ó : [���ڵ� ��Ʃ��](https://youtu.be/2CHkds265N8)

 1. Front-End (���������� http://~~/board �Է�)
 2. Router (board �� �о� Controller �� ��ȣ)
 3. Controller (Model�� ���� DB�� �ҷ��ͼ� ������ View �� ���ؼ� ȭ������ ���)

=> ��� DB : ������ DB (RDB) : like ����

---

���� ������Ʈ���� DBever �� �̿��� ���� ������ �õ� ������ ����.  
Mongo DB�� ����� ���ۿ� CRUD�� �����Ϸ� �� (NoSQL)

---

�ʿ� ����

Node.js  
NoSQL Database (MongoDB)  
DB�� CRUD  
�������� (API)  
+���� ����, npm, bootstrap ��..

---
���� ���� (���� ����)

https://www.youtube.com/watch?v=NoLV5iP5FNY

1-1. SERVER
 - <��û>�� ������ ��û�� ������ �����ִ� ���α׷�
 - �䱸�� �ϸ� ������ �� (�Ĵ� �˹ٻ�)
 - ���̹� ������ : "���� �ֹ�" �ϸ� �������� ������ ��

1-2. ��û (4��)
 (1) �ϱ� (GET)     - ������ �а� ���� ��  
 (2) ���� (POST)    - ������ ������ ��  
 (3) ���� (PUT)     - ���� ������ ��  
 (4) ���� (DELETE)  - ���� ������ ��

---
https://www.youtube.com/watch?v=pTm5E3jcOeY

2-1. NodeJS

JavaScript : HTML �� ���ӵ� ��� (HTML ���� ���)  
HTML : ���������� ����� ���� ��� (������ - �� �׸�)  
    - �̶�, Java�� Ȱ���ϸ� HTML�� ���� ������ (���̳׹�)  

JS �ؼ��� ������ ���  
 - �ؼ����� (ũ�� - V8, �ͽ��÷η� - Chakra , ���̾����� - SpiderMonkey)  
 - ũ���� ���� ���� (JS �ؼ������� �ؼ��� ���ؼ� ����)

-> ũ�ҿ��� V8�� ����� �߰��� ��� : Node.js (�ڹٸ� ������ �� �ٸ� ȯ�濡�� Ȱ�� ����)

---
2-2. Node.js Ư¡

�Ϲݾ�� ���� : ��û�� ���� ����, ���� ��û�� ��ٷ��� ��

Node.js ���� : �ϴ� ��û���� �� �ް�, ó�� �ӵ��� ���� �� ���� ����� ���� �� (None Blocking IO)  
    -> ���� sns, ä�� �� ���� ���� ��û�� �͵� �ӵ��� ������ �� �� ����   
    -> �ڵ尡 ª�� ���� (���� ���� ���� - ������ Ÿ�� ����)  
    -> ���� ������ ���� ��� (ex.�̹��� ó�� �������� ����.. ���̺귯�� ���� ����)  

---

Node.js ��ġ �� ����

 - express ���̺귯�� ��ġ  
    -> npm init ( package.json �� ���̺귯�� ����� ��� )  
    -> ����.����... entry point: (index.js) server.js �� ���� �� ����..  
    -> package.json �� ���� ��  

    -> npm install express ( package.json �� "express": "^4.17.1" ��� )  
    -> node_modules ������  
    -> (���� �� �������� ������ - ���ۿ� yarn ��ġ�� ��� (npm ��� yarn ���))  

---
https://www.youtube.com/watch?v=HeOh-go-fYY

���� ����� : server.js (������ ���� �� ����ϰڴٰ� �� ���� �� ���)

server.js �� �ڵ� �ۼ�

---
---
---
(�ٸ� ����)  
vs code ����Ű��

https://www.youtube.com/watch?v=9h8uXIsOimc&list=PLHGvDasahwZMko2OayS24NEzWYf3sMq2w&ab_channel=DannyTWLC

extention - Material Icon Theme , Bracket Pair Colorizer  
(�巡�� - alt + shift + ����Ű �Ʒ� : �巡�� �κ� �ٷ� ����)

�ܾ� ����Ŭ�� - ctrl + d (���� ���� �ܾ� ����) -> ������ ���� �� ���� ���� ����  
�ܾ� ����Ŭ�� - ctrl + u (�� �ܾ� ����)

alt + ����Ŭ�� : �ܾ� ������ ���� �� ���ÿ� ���� ����

---

Node.js ����

npm : node package manger �� �ظ�

npm init : npm �� �����Ѵٴ� ����

app.js �����  
add.js �����
mult.js �����
stat.js �����

node app.js ����

---

https://www.youtube.com/watch?v=VXTJFlCZoT8

add.js ����
mult.js ����
stat.js ����

app.js �� ��� �ڵ� �����

https://nodejs.org/api/  ���� �ھ��� Ȯ�� (api)

readline : ���� ������, ���� �� ������ ���� �޾� �� �� ���

file system : ���� ���, �����Ϳ� ���ؼ� ���

https://www.youtube.com/watch?v=B1jgTcjb4N8&list=PLHGvDasahwZMko2OayS24NEzWYf3sMq2w&index=7








