import numpy


def findMagicDiagonal(matrix):
    matrix = numpy.array(matrix)
    n = len(matrix)

    mainDiagonalSum = numpy.trace(matrix)
    antiDiagonalSum = numpy.trace(numpy.fliplr(matrix))

    if mainDiagonalSum >= antiDiagonalSum:
        diagonal = numpy.diagonal(matrix)
        diagonalIndices = numpy.vstack((numpy.arange(n), numpy.arange(n))).T
    else:
        diagonal = numpy.diagonal(numpy.fliplr(matrix))
        diagonalIndices = numpy.vstack(
            (numpy.arange(n), numpy.arange(n)[::-1])).T

    return numpy.sum(diagonal), diagonalIndices.tolist()


# Sample
size = numpy.random.randint(1, 11)
matrix = numpy.random.rand(size, size)

# Find the magic diagonal
sum, indices = findMagicDiagonal(matrix)

# Print the result
print(f"Sum: {sum} Indices: {indices}")
