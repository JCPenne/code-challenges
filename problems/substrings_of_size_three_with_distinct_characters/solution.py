class Solution:
    def countGoodSubstrings(self, s: str) -> int:
        count = 0
        windowLen = 3

        for i in range(len(s) - windowLen + 1):
            if windowLen == len(set(s[i:i + windowLen])):
                count +=1
            i +=1
        return count 