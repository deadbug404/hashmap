# HashMap

My own implementation of a hashmap using javascript. A HashMap is a collection of key,value pairs that uses its key as the indices rather than sequential numbering of the values by producing a hashcode using the key and putting the key,value pair in the index relative to the hashcode.

For example the key "elephant" produces the hashcode of 1 when we hashed it, in that case we will put the key,value pair in bucket 1 of the hashmap.

Collisions may happen if theres multiples keys that produces the same identical hashcode, because of that we will need to grow the size of the hashmap when the load has been reached to avoid as much collision as possible. To calculate the load simply multiply the current size of the hashmap and the load factor (16*0.8). Linked list has been used for each bucket to deal with collisions that cant be avoided so we can put another key,value pair in the bucket even if there already is one that exists.