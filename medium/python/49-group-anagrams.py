class Solution:
    def group_anagrams(self, strs: list[str]) -> list[list[str]]:
        group_anagrams: dict[str, list[str]] = {}

        for word in strs:
            alphabet: list[int] = [0] * 26

            for char in word:
                index = ord(char) - ord("a")
                alphabet[index] += 1

            key = "#".join(map(str, alphabet))

            if key not in group_anagrams:
                group_anagrams[key] = [word]
            else:
                group_anagrams.get(key).append(word)

        return list(group_anagrams.values())

    def groupAnagrams1(self, strs: list[str]) -> list[list[str]]:
        group_anagrams: dict[str, list[str]] = {}

        for word in strs:
            sorted_list = sorted(word)
            sorted_word = "".join(sorted_list)

            if sorted_word in group_anagrams:
                group_anagrams.get(sorted_word).append(word)
            else:
                group_anagrams[sorted_word] = [word]

        return list(group_anagrams.values())
