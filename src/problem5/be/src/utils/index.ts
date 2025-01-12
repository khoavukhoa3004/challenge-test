
import camelcaseKeys from 'camelcase-keys';

const camelcase = () => (req: any, res: any, next) => {
  req.body = camelcaseKeys(req.body, { deep: true });
  req.params = camelcaseKeys(req.params);
  req.query = camelcaseKeys(req.query);
  next();
};
