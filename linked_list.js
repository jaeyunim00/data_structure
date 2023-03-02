//Node 클래스 정의
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

  //원하는 노드 찾기
  find(value) {
    let curNode = this.head;
    while (curNode.value !== value) {
      curNode = curNode.next;
    }
    return curNode;
  }

  //노드 연결
  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  //원하는 위치에 노드 삽입
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  //노드 삭제
  remove(value) {
    let preNode = this.head;
    while (preNode.next.value !== value) {
      preNode = preNode.next;
    }

    if (preNode.next !== null) {
      preNode.next = preNode.next.next;
    }
  }

  display() {
    let curNode = this.head;
    let displayString = "";
    while (curNode !== null) {
      displayString += ` [ ${curNode.value} ] `;
      curNode = curNode.next;
    }
    console.log(displayString);
  }

const linkedList = new SinglyLinkedList();

console.log(linkedList);
linkedList.append(1);
console.log(linkedList);
linkedList.append(2);
console.log(linkedList);
linkedList.append(3);
console.log(linkedList);
linkedList.append(4);
console.log(linkedList);

linkedList.display();
