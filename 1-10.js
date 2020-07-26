/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。

 示例:
 给定 nums = [2, 7, 11, 15], target = 9
 因为 nums[0] + nums[1] = 2 + 7 = 9
 所以返回 [0, 1]
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target)
                return [i,j];
        }
    }
};


/**
 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 示例：
 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 输出：7 -> 0 -> 8
 原因：342 + 465 = 807
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val,node) {
     this.val = val;
     this.next = node;
 }
var addTwoNumbers = function(l1, l2) {
    let res = new ListNode(0,null);
    let cur = res;
    let jin = 0;
    while(l1!==null||l2!=null||jin!==0){
        let val1 =  l1!==null?l1.val:0;
        let val2 =  l2!==null?l2.val:0;
        let temp =  (val1+val2+jin);

        let val = temp>9?temp-10:temp;
        jin = (temp)>9?1:0;
        const node = new ListNode(val,null)
        cur.next = node;
        cur = node;
        l1 = l1&&l1.next;
        l2= l2&&l2.next;
    }
    return res.next;
};

// let l1 = new ListNode(1,null);
let l1 = new ListNode(2,new ListNode(4,new ListNode(3,null)));
let l2 = new ListNode(5,new ListNode(6,new ListNode(4,null)));
console.log(addTwoNumbers(l1,l2))


var threeSum = function(nums) {
    nums.sort();
    const res = []

    if(nums[0]>=0||nums[nums.length-1]<=0) return res;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>=0) return res;
        if(i>0&&nums[i]===nums[i-1])  break;
        for(let j=i+1;j<nums.length;j++){

            if(nums[i]+nums[j]>=0) break;
            if(j>1&&nums[j]===nums[j-1])  break;
            for(let k = j+1;k<nums.length;k++){
                if(k>0&&nums[k]===nums[k-1]) return res;
                if(nums[i]+nums[j]+nums[k]===0){
                    res.push([nums[i],nums[j],nums[k]])
                }
            }
        }
    }
    return res;

};

console.log(threeSum([-1,0,1,2,-1,-4]))




/**
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

 示例 1:
 输入: 121
 输出: true
 示例 2:
 输入: -121
 输出: false
 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 */
var isPalindrome = function(x) {
    x = x +'';
    for(let i=0;i<x.length/2;i++){
        if(x[i]!==x[x.length-1-i]){
            return false;
        }
    }
    return true;

};


var romanToInt = function(s) {
    let map={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000,
        'IV':4,
        'IX':9,
        'XL':40,
        'XC':90,
        'CD':400,
        'CM':900,
    }
    let sum = 0;
    while(s){
        let temp = s.slice(0,2);
        if(map[temp]){
            sum+= map[temp];
            s = s.slice(2);
        }else{
            sum+= map[s[0]]
            s = s.slice(1);
        }
    }
    return sum;

};

console.log(romanToInt("MMMXLV"))

var mergeTwoLists = function(l1, l2) {
    let resNode = new ListNode(0,null);
    let cur = resNode;
    while(l1!=null&&l2!=null){
        if(l1.val<=l2.val){
            cur.next = l1;
            cur = l1;
            l1 = l1.next;
        }else{
            cur.next = l2;
            cur = l2;
            l2 = l2.next;
        }
    }
    if(l1!=null){
        cur.next = l1;
    }
    if(l2!=null) cur.next = l2;
    return resNode.next;

};

 l1 = new ListNode(1,new ListNode(2,new ListNode(4,null)));
 l2 = new ListNode(1,new ListNode(3,new ListNode(4,null)));
console.log(mergeTwoLists(l1,l2))


var countAndSay = function(n) {
    n = n+'';
    let num = 1;
    let res = '';
    if(n.length==1) return 1+''+num;
    for(let i=0;i<n.length;i++){
        if(i!=n.length-1&&n[i]===n[i+1]) num++
        else{
            res+= `${num}${n[i]}`;
        }

    }
    return res;

};
console.log(countAndSay(1))


var longestCommonPrefix = function(strs) {
    return  strs.reduce((pre,cur)=>{
        return common(pre,cur)
    })


};

var common = function(str1,str2){
    let min = Math.min(str1.length,str2.length);
    for(let i=0;i<min;i++){
        if(str1[i]!==str2[i]){
            return str1.slice(0,i);
        }
    }
    return str1.slice(0,min);
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
