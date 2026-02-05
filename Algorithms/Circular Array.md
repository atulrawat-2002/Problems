# To navigare in a circular array

Step 1. First normalize the number of steps need to move by taking modulo

k = k % length
From index i move k steps
If k > length
Ex: 9 > 5 => 9 % 5 => 4 => 4 steps needed to move

Step 2. When index reach out of bounds take modulo with length again

newIndex = i + k
if newIndex > n => newIndex % n
Ex: i = 3, k = 3, n = 4
newIndex = i + k => 3 + 3 => 6 > 4
newIndex = newIndex % n = 6 % 4 => 2

Step 3. To move in the backward direction
If the steps turned out to be negative then add n to make it positive
Ex: i = 2, k = -4, n = 5
newIndex = i + k => 2 - 4 => -2 < 0 so, 
newIndex = newIndex + n => -2 + 5 => 3


Final formula => newIndex = newIndex = ((i + k) % n + n) % n