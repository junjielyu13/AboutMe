import unittest
import numpy
from findMagicDiagonal import findMagicDiagonal


class TestFindMagicDiagonal(unittest.TestCase):
    def testFindMagicDiagonalArray(self):
        matrix = [
            [1, 2, 3, 4, 5],
            [2, 3, 4, 5, 6],
            [3, 4, 5, 6, 7],
            [4, 5, 6, 7, 8],
            [5, 6, 7, 8, 1]
        ]
        sum, indices = findMagicDiagonal(matrix)
        self.assertEqual(sum, 25)
        self.assertEqual(indices, [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]])

    def testFindMagicDiagonalNumpy(self):
        matrix = numpy.array([
            [1, 2, 3, 4, 5],
            [2, 3, 4, 5, 6],
            [3, 4, 5, 6, 7],
            [4, 5, 6, 7, 8],
            [5, 6, 7, 8, 1]
        ])
        sum, indices = findMagicDiagonal(matrix)
        self.assertEqual(sum, 25)
        self.assertEqual(indices, [[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]])


if __name__ == '__main__':
    unittest.main()
