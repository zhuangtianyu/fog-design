import path from 'path';

export default {
  resolveSnapshotPath: (testPath, snapshotExtension) =>
    path.join(path.dirname(testPath), 'snapshots', path.basename(testPath) + snapshotExtension),
  resolveTestPath: (snapshotFilePath, snapshotExtension) =>
    path.join(path.dirname(snapshotFilePath), '../', path.basename(snapshotFilePath).slice(0, -snapshotExtension.length)),
  testPathForConsistencyCheck: 'src/components/button/test/index.test.tsx',
};
