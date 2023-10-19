class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        def stacker(string: str):
            stack = []
            for i in range(len(string)):
                if string[i] != '#':
                    stack.append(string[i])
                elif stack:
                    stack.pop()
            return ('').join(stack)

        if stacker(s)==stacker(t):
            return True
        else:
            return False